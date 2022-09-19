import GameController from "./GameController.js";
import DomElements from "../gameData/types/DOMElementTypes.js";
import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";
import { field } from "./Fields.js";


interface GameControllerTypes {
	row?: number,
	column?: number,
	WIDTH?: number,
	arrayBombNeighboursOnFirstClick?: Array<number>,
	index?: number
};




export default class Bombs extends GameController {

	private setObjectOfRandomMines: Set<number>;
	private bombsRandomArrayGenerated: Array<number>;
	public bombsArray: Array<number> //! временная заглушка

	private gameControllerTypes: GameControllerTypes;

	constructor() {
		super(qSelectedBodyElements);
		this.setObjectOfRandomMines = new Set<number>();
		this.bombsRandomArrayGenerated = new Array<number>();
		field;
		this.bombsArray = [];

		this.gameControllerTypes = {
			row: this.row,
			column: this.column,
			WIDTH: this.WIDTH,
			arrayBombNeighboursOnFirstClick: this.bombsArray,
			index: this.index
		}
	};



	public eventControllerFields() {
		this.userFieldsEventsController();
		// console.log(this.userButtonsEventsController()); //!


		this.domElement.field?.addEventListener('click', (event) => {
			event.preventDefault();
			const selector = event.target as HTMLInputElement;

			/*
			console.log('haqq we here');
			if (typeof this.WIDTH !== "undefined" && typeof this.column !== 'undefined'
				&& typeof this.index !== 'undefined' && typeof this.row !== 'undefined') {

				this.bombsFirstClickAnimation(this.row, this.column, this.WIDTH,
					this.bombsArray, this.index)

			};
			*/
		});

	};

	public eventControllerButtons() {
		this.userFieldsEventsController();
		// this.userButtonsEventsController();//! 

		this.domElement.buttonsParentDiv?.addEventListener('click', (event) => {
			event.preventDefault();
			const selector = event.target as HTMLInputElement;

			
			/*
				console.log('haqq we here');
				if (typeof this.WIDTH !== "undefined" && typeof this.column !== 'undefined'
					&& typeof this.index !== 'undefined' && typeof this.row !== 'undefined') {
	
					this.bombsFirstClickAnimation(this.row, this.column, this.WIDTH,
						this.bombsArray, this.index)
	
				};
			*/
		});
	}


	private bombsFirstClickAnimation(row: number, column: number, WIDTH: number,
		arrayBombNeighboursOnFirstClick: Array<number>, index: number) {

		if (arrayBombNeighboursOnFirstClick.length === 0) {
			this.pushNeighborFieldsIndex(row, column, WIDTH,
				arrayBombNeighboursOnFirstClick, index);
		};

		this.pushNeighborFieldsIndex(row, column, WIDTH,
			arrayBombNeighboursOnFirstClick, index);

		this.openNeighborsFields(row, column, WIDTH,
			arrayBombNeighboursOnFirstClick, index);

		arrayBombNeighboursOnFirstClick.forEach(neighbors => {
			this.setObjectOfRandomMines.add(neighbors);
		});

		console.log('we here');

		/*
			do {
				this.setObjectOfRandomMines.add(this.randomizerMinesIndex(
					0, 225));
			} while (this.setObjectOfRandomMines.size < ())v
		*/



	};

	private pushNeighborFieldsIndex(row: number, column: number, WIDTH: number,
		arrayBombNeighboursOnFirstClick: Array<number>, index: number) {
		if (!field.isValidForOpenCell(row, column, WIDTH)) return false;

		return arrayBombNeighboursOnFirstClick.push(index)
	};

	private openNeighborsFields(row: number, column: number, WIDTH: number,
		arrayBombNeighboursOnFirstClick: Array<number>, index: number) {
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				(this.pushNeighborFieldsIndex(row + y, column + x, WIDTH,
					arrayBombNeighboursOnFirstClick, index))
			}
		}
	}

	private randomizerMinesIndex(minArrayIndex: number, maxArrayIndex: number): number {
		minArrayIndex = Math.ceil(minArrayIndex);
		maxArrayIndex = Math.floor(maxArrayIndex);
		return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
	};

}

export const bombs = new Bombs();
// console.log(bombs.eventControllerFields());
// console.log(bombs.eventControllerButtons());