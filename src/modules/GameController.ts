import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";
import DomElements from "../gameData/types/DOMElementTypes.js";


export default class GameController {
	protected index: number | undefined;
	protected column: number | undefined;
	protected row: number | undefined;
	protected WIDTH: number | undefined;
	protected cellsArray: Array<object> = new Array();

	constructor(
		protected domElement: DomElements,
	) {
		this.domElement = domElement;

	}

	public userFieldsEventsController()  {
		this.domElement.field?.addEventListener('click', (event) => {
			event.preventDefault();
			const selector = event.target as HTMLInputElement;
			this.getfieldCellsChildrens();
			this.getTargetIndex(selector);
			this.getBoardWidth();
			this.getNumberBoardColumn();
			this.getNumberBoardRow();

		
		});
	};

	public userButtonsEventsController() { //! maybe later delet
		this.domElement.buttonsParentDiv?.addEventListener('click', (event) => {
			event.preventDefault();
			const selector = event.target as HTMLInputElement;

			console.log(this.domElement.field?.childNodes.length);
			// console.log('comeon we here');
		});
	}

	private getfieldCellsChildrens() {
		this.domElement.fieldCellsChildren = document.querySelectorAll('.fields__cell');
		this.cellsArray = [...this.domElement.fieldCellsChildren];
	};
	private getTargetIndex(selector: HTMLInputElement) {
		if (this.cellsArray.length !== 0) this.index =
			this.cellsArray.indexOf(selector);
	};
	private getBoardWidth() {
		if (Math.ceil(this.cellsArray.length / 10) === 10) this.WIDTH = 10;
		if (Math.ceil(this.cellsArray.length / 15) === 15) this.WIDTH = 15;
		if (Math.ceil(this.cellsArray.length / 20) === 20) this.WIDTH = 20;
		// you can always expand this
	};
	private getNumberBoardColumn() {
		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.column = this.index % this.WIDTH;
	};
	private getNumberBoardRow() {
		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.row =
				Math.floor(this.index / this.WIDTH);
	}
}
// const abc = new GameController(qSelectedBodyElements);