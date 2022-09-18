import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";
import DomElements from "../gameData/types/DOMElementTypes.js";

export default class GameController {
	index: number | undefined;
	column: number | undefined;
	row: number | undefined;
	cellsArray: any = new Array();

	constructor(
		private domElement: DomElements,
	) {
		this.domElement = domElement;
	}

	userController() {
		this.domElement.field?.addEventListener('click', (event) => {
			event.preventDefault();
			const selector = event.target;
			console.log(selector);
		})
	}
	//! в дальнейшем использую вместо arrayChildrenCells
	getfieldCellsChildrens() {
		this.domElement.fieldCellsChildren = document.querySelectorAll('.fields__cell');
		this.cellsArray = [...this.domElement.fieldCellsChildren];
	}

	getTargetIndex() {
		if (this.cellsArray.length !== 0) this.index = this.cellsArray.indexOf(event?.target);
	}

}
const abc = new GameController(qSelectedBodyElements);