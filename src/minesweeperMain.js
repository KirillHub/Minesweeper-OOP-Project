'use strict'

import { arrayGameModeStates } from "../dist/gameData/gameModeStatesData.js";
// import DomElements from "../dist/gameData/types/DOMElementTypes.js";
import { qSelectedBodyElements } from "../dist/gameData/bodyElementsClassNameData.js";
import { GlobalGameData } from "../dist/gameData/GameDataController.js";

import Board from "../dist/modules/Board.js";


const board = new Board(qSelectedBodyElements, arrayGameModeStates);
// console.log(board.boardCreation(15,15));
board.toggleFieldStyleStates();


const globalGameData = new GlobalGameData(qSelectedBodyElements);

const gameController = qSelectedBodyElements.field.addEventListener('click', (event) => {
	event.preventDefault();
	const selector = event.target;
	// if(selector.tagname !== 'DIV') return //? 

	// console.log(globalGameData.getArrayChildrenCells());
	console.log(globalGameData.arr);
});