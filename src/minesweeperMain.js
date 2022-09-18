'use strict'

import { arrayGameModeStates } from "../dist/gameData/gameModeStatesData.js";
import { qSelectedBodyElements } from "../dist/gameData/bodyElementsClassNameData.js";
import GameController from "../dist/modules/GameController.js";
import Board from "../dist/modules/Board.js";


const board = new Board(qSelectedBodyElements, arrayGameModeStates);
board.toggleFieldStyleStates();

const gameController = new GameController(qSelectedBodyElements);
console.log(gameController.userController());
