import DomElements from "./types/DOMElementTypes"

export const qSelectedBodyElements: DomElements = {
	"flagsCounterBlock": document.querySelector(".main-title__flags-counter"),
	"field": document.querySelector('.field'),
	"fieldCellsChildren": document.querySelectorAll('.fields__cell'),
	"buttonsParentDiv": document.querySelector('.buttons-config'),
	"endGameText": document.querySelector('.end-game'),
};
