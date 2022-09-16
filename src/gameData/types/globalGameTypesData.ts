export interface GlobalGameTypesData {
	flagsCounter: number | undefined;
	index: number | undefined;
	column: number | undefined;
	row: number | undefined;

	cells: [NodeListOf<Element>] | null;
	arrayChildrenCells: [NodeListOf<Element>] | null;

	bombsFirstClickAnimationArray: number[] | undefined;
	bombsRandomArrayGenerated: number[] | undefined;
	arrayBombNeighboursOnFirstClick: number[] | undefined;

	setObjectOfRandomMines: {} | null | number;
	flagsLocationCoords: {} | null | number;
}