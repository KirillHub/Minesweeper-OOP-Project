
// import DomElements from "../gameData/types/DOMElementTypes.js";
import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";
import GameController from "./GameController.js";
import { bombs } from "./Bombs.js";


interface GameControllerTypes {
	row?: number,
	column?: number,
	WIDTH?: number,
	arrayBombNeighboursOnFirstClick?: Array<number>,
	index?: number
};

const colorNumberArray = ['blue', 'green', 'red', 'purple', 'black',
	'darkslategray', 'rgb(64, 25, 90)', 'rgb(15, 81, 119)'];


export default class Fields extends GameController {
	public bombsArray: Array<number> //! временная заглушка
	private gameControllerTypes: GameControllerTypes
	constructor(
		private colorNumberArray: string[]
	) {
		super(qSelectedBodyElements);
		this.bombsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		this.gameControllerTypes = {
			'WIDTH': this.WIDTH,
			'row': this.row,
			'column': this.column,
			'index': this.index,
			'arrayBombNeighboursOnFirstClick': this.bombsArray
		}
	}

	/*
	row: number | undefined, column: number | undefined,
		selector: HTMLInputElement, WIDTH: number | undefined, cellsArray: any,
		bombsArray: Array<number>
	*/
	public controllerOpenFieldCells(): any {
		this.userFieldsEventsController();

		this.domElement.field?.addEventListener('click', (event) => {
			event.preventDefault();
			// this.userController();
			const selector = event.target as HTMLInputElement;
			const targetCell = this.cellsArray[this.index!] as HTMLInputElement | null;

			if (typeof this.WIDTH !== "undefined" && typeof this.column !== 'undefined'
				&& typeof this.index !== 'undefined' && typeof this.row !== 'undefined') {
				this.openFieldCells(this.row, this.column, selector, this.WIDTH,
					targetCell, this.bombsArray);
			};

		});
	};

	private isBombCell(row: number, column: number,
		WIDTH: number, bombsArray: any): any {//? : boolean | undefined

		if (this.isValidForOpenCell(row, column, WIDTH, bombsArray)) { return false; }

		const index = row * WIDTH + column;

		if (bombsArray.length !== 0) {
			return bombsArray.includes(index);
		}
	};

	public isValidForOpenCell(row: number, column: number,
		WIDTH: number, bombsArray: any): any {
		return row >= 0 && row < WIDTH
			&& column >= 0 && column < WIDTH
	};

	private getCellsCount(row: number, column: number,
		WIDTH: number, bombsArray: Array<number>): any {
		let count = 0;
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				if (this.isBombCell(row + y, column + x, WIDTH, bombsArray)) {
					count++
				};
			};
		};
		return count;
	}

	private openFieldCells(row: number, column: number, selector: any,
		WIDTH: number, cellsArray: any, bombsArray: Array<number>) {

			const index = row * WIDTH + column;
		

		const targetCell:any = this.cellsArray[index]//!  as HTMLInputElement | null;
		if (targetCell?.disabled === true) return;
		targetCell!.disabled = true;
		

		// const index = row * WIDTH + column;
		// const targetCell = cellsArray[index];
		// console.log(targetCell);
		// if (targetCell.disabled === true) return;
		// targetCell.disabled = true;

		if (index >= 0) {
			this.hoverEffectClassListStyle(targetCell!, this.domElement.flagsCounterBlock);

			colorNumberArray.forEach((item, index) => {
				++index;
				if (this.getCellsCount(row, column, WIDTH, bombsArray) > 0) {
					if (this.getCellsCount(row, column, WIDTH, bombsArray) == index) {
						targetCell!.style.color = item;
					}
				}
			});

			if (this.isBombCell(row, column, WIDTH, bombsArray)) {
				targetCell!.innerHTML = '💣';
				return;
			};

			const count: any = this.getCellsCount(row, column, WIDTH, bombsArray);
			if (count !== 0) {
				console.log(targetCell);
				targetCell!.innerHTML = count;
				return
			};

			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					this.openFieldCells(row + x, column + y, selector, WIDTH,cellsArray, bombsArray);
				}
			};
		};


	};



	private hoverEffectClassListStyle(target: HTMLInputElement,
		flagsCounterBlock: any): any { //! later change
		let countingFlags = 0;
		if (target.textContent == '🚩') countingFlags++;

		if (countingFlags > 0) flagsCounterBlock.innerHTML =
			+flagsCounterBlock.innerHTML + (+countingFlags)

		if (target.textContent = '🚩') target.innerHTML = '';

		if (target.style.backgroundColor === 'rgb(169, 215, 81)') {
			target.style.backgroundColor = '#e4c29f';
			target.classList.remove('fields__hover-class');
			target.style.cursor = "auto";
		} else if (target.style.backgroundColor === 'rgb(162, 208, 73)') {
			target.style.backgroundColor = '#d7b899';
			target.classList.remove('fields__hover-class');
			target.style.cursor = "auto";
		};
	}

}

export const field = new Fields(colorNumberArray);
console.log(field.controllerOpenFieldCells());
