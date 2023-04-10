const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'
const game = document.querySelector('.game')
let firstChoice, secondChoice;
isPaused = false;

const loadBoard = async () => {
  turns = 0
  const randomIds = new Set()
  while (randomIds.size < 8) {
    const randomNumber = Math.floor(Math.random() * 1009)
    randomIds.add(randomNumber)
  }

  const pokePromises = [...randomIds].map(id => fetch(pokeAPI + id))
  const responses = await Promise.all(pokePromises)
  return await Promise.all(responses.map(res => res.json()))
}

const displayBoard = (pokemon) => {
  pokemon.sort(_ => Math.random() - 0.5)
  const pokemonHTML = pokemon.map(pokemon => {
    return `
      <div class="card" onclick="flipCard(event)" data-name="${pokemon.name}">
        <div class="view front-view">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" class="pokeball" alt="pokeball"/>
        </div>
        <div class="view back-view">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
        </div>
      </div>
    `
  }).join('')
  game.innerHTML = pokemonHTML
}

const resetBoard = async () => {
  const pokemon = await loadBoard()
  displayBoard([...pokemon, ...pokemon])
}

const flipCard = (event) => {
  event.preventDefault();
  let clickedCard = event.currentTarget;
  console.log(event.currentTarget.dataset.name)
  if (clickedCard !== firstChoice && !isPaused) {
    clickedCard.classList.add("flip");
    if (!firstChoice) {
      return (firstChoice = clickedCard);
    }
    secondChoice = clickedCard;
    isPaused = true;
    let firstChoiceImg = firstChoice.querySelector(".back-view img").src;
    secondChoiceImg = secondChoice.querySelector(".back-view img").src;
    macthCards(firstChoiceImg, secondChoiceImg);
  }
}

const macthCards = (firstImg, secondImg) => {
  if (firstImg === secondImg) {
    turns++;
    if (turns == 8) {
      setTimeout(() => {
        alert(
          `You won the game!`
        );
      }, 800);
    }
    firstChoice.removeEventListener("click", flipCard);
    secondChoice.removeEventListener("click", flipCard);
    firstChoice = secondChoice = "";
    return (isPaused = false);
  }
  setTimeout(() => {
    firstChoice.classList.add("wrong");
    secondChoice.classList.add("wrong");
  }, 400);

  setTimeout(() => {
    firstChoice.classList.remove("flip", "wrong");
    secondChoice.classList.remove("flip", "wrong");
    firstChoice = secondChoice = "";
    isPaused = false;
  }, 800);
}


resetBoard()