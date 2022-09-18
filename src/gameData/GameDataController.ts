import { qSelectedBodyElements } from "./bodyElementsClassNameData.js";
import DomElements from "./types/DOMElementTypes.js";

export class GlobalGameData {
	index: number | undefined;
	column: number | undefined;
	row: number | undefined;
	// cells: Array<NodeListOf<Element>> | null;
	// cells: any;
	cellsArray: any = new Array();

	constructor(
		private domElement: DomElements,
	) {
		this.domElement = domElement;
	}

	//! в дальнейшем использую вместо arrayChildrenCells
	getfieldCellsChildrens() {
		this.domElement.fieldCellsChildren = document.querySelectorAll('.fields__cell');
		this.cellsArray = [...this.domElement.fieldCellsChildren];
		// console.log(this.cellsArray);
		// console.log(this.domElement.fieldCellsChildren);
	}

	getTargetIndex() {
		if (this.cellsArray.length !== 0) this.index = this.cellsArray.indexOf(event?.target);
	}

}
const abc = new GlobalGameData(qSelectedBodyElements);
console.log(abc);
// console.log(abc.cells);