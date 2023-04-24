# Pokemon Flip - Memory Match Game

## Project Description

Pokemon Flip is a fun and interactive memory match game that uses PokeAPI to randomize the Pokemon used in the game. This project is built using HTML, CSS, and JavaScript.

![pokemonflip](https://user-images.githubusercontent.com/114940348/234069603-65bc7807-4d65-4b2c-bd20-dd53316afd95.gif)

## Table of Contents

- [Installation](#installation)
- [How to Play](#how-to-play)
- [API](#api)

## Installation

To run this project on your local machine, follow these steps:

1. Clone the repository by running ```git clone https://github.com/hiramr97/pokemon-flip.git``` in your terminal or command prompt.

2. Navigate to the project directory by running ```cd pokemon-flip``` in your terminal or command prompt.

3. Open the index.html file in your web browser.

Alternatively, you can play the game online by visiting https://hirammr97.github.io/pokemon-flip/.

## How to Play

The objective of the game is to match pairs of Pokemon tiles by flipping them over two at a time. The game begins with all tiles face down, and the player flips over two tiles at a time to reveal the Pokemon. If the two tiles match, they stay face up. If the tiles do not match, they flip back over, and the player has to try again. The game ends when all pairs have been matched.

## API
Pokemon Flip uses [PokeAPI](https://pokeapi.co/) to randomize the Pokemon used in the game. PokeAPI is a RESTful API that provides a wealth of data on Pokemon, including their name, type, abilities, and more. The API is free to use, and no authentication is required.

To access the PokeAPI, Pokemon Flip uses JavaScript's built-in fetch() method to make requests to the API. The API returns data in JSON format, which is parsed by the game's JavaScript code and used to generate the Pokemon tiles.
