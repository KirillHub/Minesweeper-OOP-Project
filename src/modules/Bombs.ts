import GameController from "./GameController.js";
import DomElements from "../gameData/types/DOMElementTypes.js";
import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";
import { field } from "./Fields.js";

interface Variables {
	row: number,
	column: number,
	WIDTH: number,
	arrayBombNeighboursOnFirstClick: Array<number>,
	index: number
};


interface TeslaModelS {
	length: number;
	width: number;
	wheelbase: number;
	seatingCapacity: number;
	getTyrePressure: () => number;
	getRemCharging: () => number;
}
function buildTeslaModelS(teslaObj: TeslaModelS) {
}

// buildTeslaModelS({
// length: 169,
/*
length: 196,
width: 86,
wheelbase: 116,
seatingCapacity: 4,
getTyrePressure: function () {
	let tyrePressure = 20 // Evaluated after doing a few complex computations!
	return tyrePressure
},
getRemCharging: function () {
	let remCharging = 20 // Evaluated after doing a few complex computations!
	return remCharging
}
*/
// });


export default class Bombs extends GameController {

	private setObjectOfRandomMines: Set<number>;
	private bombsRandomArrayGenerated: Array<number>;
	public bombsArray: Array<number> //! временная заглушка


	constructor() {
		super(qSelectedBodyElements);
		this.setObjectOfRandomMines = new Set<number>();
		this.bombsRandomArrayGenerated = new Array<number>();
		field;
		this.bombsArray = [];

		interface Variables {
			(row: number,
				column: number,
				WIDTH: number,
				arrayBombNeighboursOnFirstClick: Array<number>,
				index: number): void;
		}
	};

	public eventController() {
		this.userFieldsEventsController();
		// console.log(this.userButtonsEventsController()); 
		

		this.domElement.field?.addEventListener('click', (event) => {
			const selector = event.target as HTMLInputElement;
			console.log(selector);
			console.log(this.WIDTH);

			if (typeof this.WIDTH !== "undefined" && typeof this.column !== 'undefined'
				&& typeof this.index !== 'undefined' && typeof this.row !== 'undefined') {

				this.bombsFirstClickAnimation(this.row, this.column, this.WIDTH,
					this.bombsArray, this.index);

			};
		});

	};


	private bombsFirstClickAnimation(row: number, column: number, WIDTH: number,
		arrayBombNeighboursOnFirstClick: Array<number>, index: number
	) {
		if (arrayBombNeighboursOnFirstClick.length === 0) {
			this.pushNeighborFieldsIndex(row, column, WIDTH);
		}
		return arrayBombNeighboursOnFirstClick.push(index)
	};

	private pushNeighborFieldsIndex(row: number, column: number, WIDTH: number) {
		if (!field.isValidForOpenCell(row, column, WIDTH)) return false;

	};

	private openNeighborsFields(row: number, column: number, WIDTH: number) {

	}

	private randomizerMinesIndex(minArrayIndex: number, maxArrayIndex: number): number {
		minArrayIndex = Math.ceil(minArrayIndex);
		maxArrayIndex = Math.floor(maxArrayIndex);
		return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
	};

}

export const bombs = new Bombs();
console.log(bombs.eventController());