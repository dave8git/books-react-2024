import { createStore } from 'redux';
import shortid from 'shortid';

// selectors 
export const getAllBooks = state => state.books; 

// action names
//
//const createActionName = name => `app/books/${name}`;

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

const reducer = (state, action) => {
    switch(action.type) {
        case REMOVE_BOOK:
            return { ...state, books: state.books.filter(book => book.id !== action.payload)};
        case ADD_BOOK:
            return { ...state, books: [ ...state.books, { ...action.payload, id: shortid() }]};
        default: 
            return state;
    }
    return state; 
};

const initialState = {
    books: [
        {id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
        {id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'},
    ]
}; 

const store = createStore(
    reducer,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; 