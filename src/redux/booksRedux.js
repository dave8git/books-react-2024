import shortid from 'shortid';

// selectors 
export const getAllBooks = state => state.books; 

const createActionName = name => `app/books/${name}`;
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const ADD_BOOK = createActionName('ADD_BOOK');
const UPDATE_BOOKS = createActionName('UPDATE_BOOKS');


// action creators 
export function removeBook(payload) {
    console.log('payload', payload);
    return {
        type: REMOVE_BOOK,
        payload: payload
    }
} 

export const addBook = payload => ({ type: ADD_BOOK, payload});
export const updateBooks = payload => ({ type: UPDATE_BOOKS, payload});

export const fetchBooks = () => {
    return (dispatch) => { // funkcja fetchBook nie będzie już funkcją pośrednikiem, a będzie taką funkcję pośrednik zwracać, 
        fetch('http://localhost:3131/api/books') // dzięki temu będziemy mogli takiej funkcji użyć jak akcji
        .then(res => res.json())
        .then(books => dispatch(updateBooks(books))); // pobierz książki i nadpisz nimi cały stan
    }
};

export const addBookRequest = (newBook) => {
    return (dispatch) => {
        const options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        };

        fetch('http://localhost:3131/books', options)
            .then(() => dispatch(addBook(newBook)))
    }
}

export const booksReducer = (statePart = [], action) => {
    switch(action.type) {
        case REMOVE_BOOK:
            return statePart.filter(book => book.id !== action.payload);
        case ADD_BOOK:
            return [ ...statePart, { ...action.payload, id: shortid() }];
        case UPDATE_BOOKS:
            return [...action.payload];
        default: 
            return statePart;
    } 
};