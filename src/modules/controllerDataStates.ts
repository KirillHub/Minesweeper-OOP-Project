

const easyGameModeStates: object = {
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
};


const normalGameModeStates: object = { //? Later checking another game modes
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
};
const hardGameModeStates: object = { //? Later checking another game modes
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
};


// export const gameModeStates: any = [easyGameModeStates, normalGameModeStates,
// 	hardGameModeStates];


function welcomePeople(x: string[] | string) {
	if (Array.isArray(x)) {
		// Here: 'x' is 'string[]'
		console.log("Hello, " + x.join(" and "));
	} else {
		// Here: 'x' is 'string'
		console.log("Welcome lone traveler " + x);
	}
}


interface Container {
	value: number | null | undefined;
}

/*
interface AddCommentAction {
  type: CommentsActionTypes.COMMENT_CREATE;
  payload: {
    bookId: string;
    comId: string;
    stat: {};
    comName: string;
    comTitle: string;
    text: string;
    id: string;
  };
}
*/
/*
import { BookAction, BookActionTypes, BookState } from '../types/book';

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

export const bookReducer = (state = initialState, action: BookAction): BookState => {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS:
      return { loading: true, error: null, books: [] };
    case BookActionTypes.FETCH_BOOKS_SUCCESS:
      return { loading: false, error: null, books: action.payload };

    case BookActionTypes.FETCH_BOOKS_ERROR:
      return { loading: false, error: action.payload, books: [] };
    default:
      return state;
  }
};
*/

/*

function multiplyValue(container: Container, factor: number) {
	// Remove both 'null' and 'undefined' from the type.
	if (container.value != null) {
		console.log(container.value);

		// (property) Container.value: number

		// Now we can safely multiply 'container.value'.
		container.value *= factor;
	}
}

console.log(multiplyValue({}, 2));
*/

