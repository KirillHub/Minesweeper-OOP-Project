import { arrayGameModeStates } from "../gameData/gameModeStatesData.js";
import DomElements from "../gameData/types/DOMElementTypes.js";
// import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";

export default class Board {
	protected domElement: DomElements;
	private counter: number;
	private number: number;

	constructor(
		protected domElements: DomElements,
		protected activatorGameStatesMode: object | Array<Object> | undefined,
	) {
		this.domElement = domElements;
		this.counter = -1;
		this.number = 0;
	}

	public toggleFieldStyleStates(): void {

		this.domElement.buttonsParentDiv?.addEventListener('click', (event) => {
			const target = event.target as HTMLInputElement;
			try {
				if (typeof this.domElement.field?.classList !== "undefined" &&
					this.domElement.field?.classList.length > 1) {
					this.domElement.field?.classList.forEach((item, index) => {
						if (index > 0) this.domElement.field?.classList.remove(item);
					});

					while (this.domElement.field.hasChildNodes()) {
						this.domElement.field.removeChild(this.domElement.field.childNodes[0])
					}
				};

				switch (target.textContent) {
					case "Easy":
						this.domElement.field?.classList.add('field_easy');
						this.boardCreation(arrayGameModeStates[0]);
						break;
					case "Normal":
						this.domElement.field?.classList.add('field_normal');
						this.boardCreation(arrayGameModeStates[1]);
						break;
					case "Hard":
						this.domElement.field?.classList.add('field_hard');
						this.boardCreation(arrayGameModeStates[2]);
						break;
					default:
						return;
				}
			} catch (error) {
				console.error(error);
			}
		});
	};

	private boardCreation(gameStatesData: any): void {
		if (this.counter !== -1) this.counter = -1;

		for (let i: number = 0; i < gameStatesData.WIDTH; i++) {
			for (let j: number = 0; j < gameStatesData.HEIGHT; j++) {
				this.counter++;
				this.number = i + j + 2;
				const unpairMaskBlock: HTMLDivElement = document.createElement('div');
				const pairMaskBlock: HTMLDivElement = document.createElement('div');
				unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
				pairMaskBlock.classList.add('fields__hover-class', "fields__cell");

				if (this.number % 2 === 0) {
					pairMaskBlock.style.backgroundColor = '#a9d751';
					this.domElement.field?.append(pairMaskBlock);
				}
				if (this.number % 2 !== 0) {
					unpairMaskBlock.style.backgroundColor = '#a2d049';
					this.domElement.field?.append(unpairMaskBlock);
				}
			}
		};
	};


}



