// теперь подход - менять классы в зависимости от нажатия кнопки
import { arrayGameModeStates } from "../gameData/gameModeStatesData.js";
import DomElements from "../gameData/types/DOMElementTypes.js";

import { qSelectedBodyElements } from "../gameData/bodyElementsClassNameData.js";

/*
! gameBoardCreation.js
! activatorGameDataStates.js
*/

console.log(qSelectedBodyElements);


class Board {

	protected domElement: DomElements;
	private counter: number;
	private number: number;
	private unpairMaskBlock;
	private pairMaskBlock;

	constructor(
		protected domElements: DomElements,
		protected activatorGameStatesMode: object | Array<Object> | undefined | number,
	) {
		this.domElement = domElements;
		this.counter = -1; //?
		this.number = 0; //?
		this.unpairMaskBlock = <HTMLDivElement>(document.createElement('div'));
		this.pairMaskBlock = <HTMLDivElement>(document.createElement('div'));
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
				}
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
		let counter = -1;
		if (counter !== -1) counter = -1;

		for (let i = 0; i < gameStatesData.WIDTH; i++) {
			for (let j = 0; j < gameStatesData.HEIGHT; j++) {
				counter++;
				let number = i + j + 2;
				const unpairMaskBlock: HTMLDivElement = (document.createElement('div'));
				const pairMaskBlock: HTMLDivElement = (document.createElement('div'));
				unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
				pairMaskBlock.classList.add('fields__hover-class', "fields__cell");

				if (number % 2 === 0) {
					pairMaskBlock.style.backgroundColor = '#a9d751';
					this.domElement.field?.append(pairMaskBlock);
				}
				if (number % 2 !== 0) {
					unpairMaskBlock.style.backgroundColor = '#a2d049';
					this.domElement.field?.append(unpairMaskBlock);
				}
			}
		};

	}

}
const toggleBoardStyleStates = new Board(qSelectedBodyElements, arrayGameModeStates);
console.log(toggleBoardStyleStates.toggleFieldStyleStates());

