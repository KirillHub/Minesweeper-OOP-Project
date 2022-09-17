// import GameDataControllerTypes from "./types/gameDataControllerTypes.js";
// import GameModeStatesTypesData from "./types/gameModeStatesTypesData.js";

export class GlobalGameData {
	// private gameDataControllerTypes: GameDataControllerTypes;
	// private gameModeStatesTypesData: GameModeStatesTypesData;
	// gameModeStatesTypesData:
	index: number | undefined;
	column: number | undefined;
	row: number | undefined;
	cells: Array<object> | null;
	fieldCellsChildren: NodeListOf<Element> | null;

	constructor(
		// public globalDataController: GameDataControllerTypes,
		// public modeStatesTypesData: GameModeStatesTypesData
	) {
		this.index;
		this.column;
		this.row;
		this.fieldCellsChildren = document.querySelectorAll('.fields__cell');
		this.cells = [...this.fieldCellsChildren];

		// this.gameDataControllerTypes = globalDataController;
		// this.gameModeStatesTypesData = modeStatesTypesData;


	}

	getArrayChildrenCells() {

	}
	getTargetIndex() {

	}
}
