import GameModeStatesTypesData from "./types/gameModeStatesTypesData";

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

export const arrayGameModeStates: object[] | null =
	[easyGameMode, normalGameMode, hardGameMode];
