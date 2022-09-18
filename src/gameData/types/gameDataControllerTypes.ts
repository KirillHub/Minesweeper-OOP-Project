export default interface GameDataControllerTypes {
	index: number | undefined;
	column: number | undefined;
	row: number | undefined;
	cells: Array<NodeListOf<Element>> | null;
	// fieldCellsChildren: NodeListOf<Element> | null;


	/*
	! раскидать по классам
	
		flagsCounter: number | undefined;
	
		cells: [NodeListOf<Element>] | null;
		arrayChildrenCells: [NodeListOf<Element>] | null;
	
		bombsFirstClickAnimationArray: number[] | undefined;
		bombsRandomArrayGenerated: number[] | undefined;
		arrayBombNeighboursOnFirstClick: number[] | undefined;
	
		setObjectOfRandomMines: {} | null | number;
		flagsLocationCoords: {} | null | number;
	*/
}


/*
! GlobalGameControler {
	index: number | undefined;
	column: number | undefined;
	row: number | undefined;

?	-> идут в конструктор ко всем классам

	+ методы всеигровые
	}
*/