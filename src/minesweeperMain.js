'use strict'

import { arrayGameModeStates } from "../dist/gameData/gameModeStatesData.js";
// import DomElements from "../dist/gameData/types/DOMElementTypes.js";
import { qSelectedBodyElements } from "../dist/gameData/bodyElementsClassNameData.js";
import { GlobalGameData } from "../dist/gameData/GameDataController.js";

import Board from "../dist/UI/Board.js";


const board = new Board(qSelectedBodyElements, arrayGameModeStates);
board.toggleFieldStyleStates();

const globalGameData = new GlobalGameData();
console.log(globalGameData);

