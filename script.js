const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'
const game = document.querySelector('.game')

let firstChoice, secondChoice;
isPaused = false;

document.querySelector(".open").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active")
})

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".popup").classList.remove("active")
})

const loadBoard = async () => {
  turns = 0
  firstChoice = secondChoice = ""

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
      <div class="card" onclick="flipCard(event)">
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
  isPaused = true

  setTimeout(async () => {
    const pokemon = await loadBoard()
    displayBoard([...pokemon, ...pokemon])
    isPaused = false
  }, 200)
}

const flipCard = (event) => {
  event.preventDefault();
  let clickedCard = event.currentTarget;
  if (clickedCard !== firstChoice && !isPaused) {
    clickedCard.classList.add("flip");
    if (!firstChoice) {
      return (firstChoice = clickedCard);
    }
    secondChoice = clickedCard;
    isPaused = true;
    let firstChoiceImg = firstChoice.querySelector(".back-view img").src;
    secondChoiceImg = secondChoice.querySelector(".back-view img").src;
    matchCards(firstChoiceImg, secondChoiceImg);
  }
}

const matchCards = (firstImg, secondImg) => {
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