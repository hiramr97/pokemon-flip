const board = document.getElementsByClassName("boxes-top")
const board2 = document.getElementsByClassName("boxes-bottom")
let isPaused = false
let firstPick

const loadPokemon = () => {
    const randomIds = new Set()
    while (randomIds.size < 8) {
        const randomNumber = Math.floor(Math.random() * 8)
        randomIds.add(randomNumber)
    }
    let randomIdsArr = [...randomIds]
    for (let i = 0; i < randomIdsArr.length; i++) {
        if (randomIdsArr[i] === 0) {
            box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://66.media.tumblr.com/tumblr_ma4fvrTeAk1rfjowdo1_500.gif"
            img.id = "mons"
            img.classList.add("rotated")
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr[i] === 1) {
            let box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_006.gif"
            img.id = "mons"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr[i] === 2) {
            let box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_003_m.gif"
            img.id = "mons"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr[i] === 3) {
            let box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_025_m.gif"
            img.id = "mons"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr[i] === 4) {
            let box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_144.gif"
            img.id = "mons"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr[i] === 5) {
            let box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_145.gif"
            img.id = "mons"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr[i] === 6) {
            let box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_146.gif"
            img.id = "mons"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr[i] === 7) {
            let box = document.querySelectorAll(".boxes-top")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_150.gif"
            img.id = "mons"
            img.style.display = "none"
            box[i].appendChild(img)
        }
    }
    const randomIds2 = new Set()
    while (randomIds2.size < 8) {
        const randomNumber2 = Math.floor(Math.random() * 8)
        randomIds2.add(randomNumber2)
    }
    let randomIdsArr2 = [...randomIds2]
    for (let i = 0; i < randomIdsArr2.length; i++) {
        if (randomIdsArr2[i] === 0) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://66.media.tumblr.com/tumblr_ma4fvrTeAk1rfjowdo1_500.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr2[i] === 1) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_006.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr2[i] === 2) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_003_m.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr2[i] === 3) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_025_m.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr2[i] === 4) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_144.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr2[i] === 5) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_145.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr2[i] === 6) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_146.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        } else if (randomIdsArr2[i] === 7) {
            let box = document.querySelectorAll(".boxes-bottom")
            const img = document.createElement("img")
            img.src = "https://www.pokencyclopedia.info/sprites/gen5/ani_black-white/ani_bw_150.gif"
            img.id = "mons-bottom"
            img.style.display = "none"
            box[i].appendChild(img)
        }
    }
}
loadPokemon()


for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('mouseover', (event) => {
        let pokemon = document.querySelectorAll("#mons")
        pokemon[i].style.removeProperty("display")

    }
    )
}
for (let j = 0; j < board2.length; j++) {
    board2[j].addEventListener('mouseover', (event) => {
        let pokemon = document.querySelectorAll("#mons-bottom")
        pokemon[j].style.removeProperty("display")
    }

    )
}
// const clickCard = (event) => {
//     const pokemonCard = event.currentTarget
//     const [front, back, front2, back2] = getFrontandBack(pokemonCard)
//     front.classList.toggle
// }
// const getFrontandBack = (card) => {
//     const front = document.querySelector(".boxes-top")
//     const front2 = document.querySelector(".boxes-bottom")
//     const back = document.querySelector("#mons-top")
//     const back2 = document.querySelector("#mons-bottom")
//     return [front, back, front2, back2]
// }
