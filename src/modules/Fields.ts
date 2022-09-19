/*
! Open fields
!Hover effect ??
*/

// import DomElements from "../gameData/types/DOMElementTypes.js";
import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";
import GameController from "./GameController.js";
import { bombs } from "./Bombs.js";

export default class Fields extends GameController {
	public bombsArray: Array<number> //! временная заглушка
	constructor(
	) {
		super(qSelectedBodyElements);
		this.bombsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		// console.log(bombs);
	}

	public openField() {

		this.domElement.field?.addEventListener('click', (event) => {
			event.preventDefault();
			// this.userController();
			const selector = event.target as HTMLInputElement;

			console.log(this.isBombCell(this.bombsArray));
		});
	};

	private isBombCell(bombArray: any) {
		if (typeof this.WIDTH !== "undefined" && typeof this.column !== 'undefined'
			&& typeof this.index !== 'undefined' && typeof this.row !== 'undefined') {
			if (this.isValidForOpenCell(this.row, this.column,
				this.WIDTH)) return false;
		};

		if (bombArray.length !== 0) {
			return bombArray.includes(this.index);
		}
	};
	
	public isValidForOpenCell(row: number, column: number,
		WIDTH: number): any {
		row >= 0 && row < WIDTH
			&& column >= 0 && column < WIDTH
	}
	
}

export const field = new Fields();
