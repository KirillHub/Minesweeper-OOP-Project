import GameModeStatesTypesData from "./types/gameModeStatesTypesData.js";

const easyGameMode: GameModeStatesTypesData = {
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
};

const normalGameMode: GameModeStatesTypesData = {
	"WIDTH": 15,
	"HEIGHT": 15,
	"BOMBS_COUNT": 35,
};

const hardGameMode: GameModeStatesTypesData = {
	"WIDTH": 20,
	"HEIGHT": 20,
	"BOMBS_COUNT": 80,
};

export const arrayGameModeStates: Array<object>
	= [easyGameMode, normalGameMode, hardGameMode];