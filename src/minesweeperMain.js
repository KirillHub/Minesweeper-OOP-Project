'use strict';

import { arrayGameModeStates } from "../dist/gameData/gameModeStatesData.js";
import { qSelectedBodyElements } from "../dist/gameData/bodyElementsClassNameData.js";
import GameController from "../dist/modules/GameController.js";
import Board from "../dist/modules/Board.js";
import Bombs from "../dist/modules/Bombs.js";
import Fields from "../dist/modules/Fields.js";


const arrayFieldVisualSettingClasses = ['field_easy', 'field_normal', 'field_hard'];



const board = new Board(qSelectedBodyElements, arrayGameModeStates,
	arrayFieldVisualSettingClasses
);
board.toggleFieldStyleStates();

const gameController = new GameController(qSelectedBodyElements);
const bombs = new Bombs();
const field = new Fields();


gameController.userFieldsEventsController();
console.log(gameController.WIDTH);
const fieldy = document.querySelector('.field').addEventListener('click', event => {
	event.preventDefault();
	const selector = event.target;

	if (selector.tagName !== 'DIV') return;

	// const but = document.querySelector('.buttons-config')..addEventListener('click,' event => {
	// 	event.preventDefault();
	// 	const selector = event.target;
	// })


});