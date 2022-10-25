const pokemon = document.querySelectorAll(".card")
let turns = 0
let firstChoice, secondChoice;
let isPaused = false
let resetGame = document.querySelector(".resetGame")
let imgSpace = document.querySelectorAll(".back-view")
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')


const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none'
}

openBtn.addEventListener('click', openModal)

closeBtn.addEventListener('click', closeModal)

function flipCard(e) {
    e.preventDefault()
    let clickedCard = e.currentTarget
    console.log(e.currentTarget)
    if (clickedCard !== firstChoice && !isPaused) {
        clickedCard.classList.add("flip")
        if (!firstChoice) {
            return firstChoice = clickedCard
        }
        secondChoice = clickedCard
        isPaused = true
        let firstChoiceImg = firstChoice.querySelector(".back-view img").src
        secondChoiceImg = secondChoice.querySelector(".back-view img").src
        macthCards(firstChoiceImg, secondChoiceImg)
    }
}

function macthCards(firstImg, secondImg) {
    if (firstImg === secondImg) {
        turns++
        if (turns == 8) {
            setTimeout(() => {
                alert("You won the game!")
                return window.location.reload()
            }, 800)
        }
        firstChoice.removeEventListener("click", flipCard)
        secondChoice.removeEventListener("click", flipCard)
        firstChoice = secondChoice = ""
        return isPaused = false
    }
    setTimeout(() => {

    }, 400)

    setTimeout(() => {
        firstChoice.classList.remove("flip")
        secondChoice.classList.remove("flip")
        firstChoice = secondChoice = ""
        isPaused = false
    }, 800)
}

function shuffleBoard() {
    turns = 0
    firstChoice = secondChoice = ""
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
    arr.sort(() => Math.random() - 0.5)
    console.log(arr)
    pokemon.forEach((card, i) => {
        card.classList.remove("flip")
        card.addEventListener("click", flipCard)
        if (arr[i] === 1) {
            const img = document.createElement("img")
            img.src = "https://66.media.tumblr.com/tumblr_ma4fvrTeAk1rfjowdo1_500.gif"
            img.id = "blastoise"
            imgSpace[i].appendChild(img)
        } else if ((arr[i] === 2)) {
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_006.gif"
            imgSpace[i].appendChild(img)
        } else if ((arr[i] === 3)) {
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_003_m.gif"
            imgSpace[i].appendChild(img)
        } else if ((arr[i] === 4)) {
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_025_m.gif"
            imgSpace[i].appendChild(img)
        } else if ((arr[i] === 5)) {
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_144.gif"
            imgSpace[i].appendChild(img)
        } else if ((arr[i] === 6)) {
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_145.gif"
            imgSpace[i].appendChild(img)
        } else if ((arr[i] === 7)) {
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_146.gif"
            imgSpace[i].appendChild(img)
        } else if ((arr[i] === 8)) {
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_150.gif"
            imgSpace[i].appendChild(img)
        }
    })
}

pokemon.forEach(card => {
    card.addEventListener("click", flipCard)
})

resetGame.addEventListener("click", () => {
    window.location.reload()
}
)
shuffleBoard()