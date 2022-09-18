import { qSelectedBodyElements } from "./bodyElementsClassNameData.js";
import DomElements from "./types/DOMElementTypes.js";

export class GlobalGameData {

	constructor(
		private domElement: DomElements

	) {
		this.domElement = domElement;
		console.log(this.domElement);

	}

	getArrayChildrenCells() {

	}

	getTargetIndex() {

	}
}
// const abc = new GlobalGameData(qSelectedBodyElements);
