'use strict'

import { arrayGameModeStates } from "../dist/gameData/gameModeStatesData.js";
import { qSelectedBodyElements } from "../dist/gameData/bodyElementsClassNameData.js";
import GameController from "../dist/modules/GameController.js";
import Board from "../dist/modules/Board.js";
import Bombs from "../dist/modules/Bombs.js";
import Fields from "../dist/modules/Fields.js";

const board = new Board(qSelectedBodyElements, arrayGameModeStates);
board.toggleFieldStyleStates();

const gameController = new GameController(qSelectedBodyElements);
const bombs = new Bombs();
const field = new Fields();

// console.log(gameController.userController());
// console.log(bombs.cringe());
// console.log(bombs.WIDTH);

// console.log(bombs.);
