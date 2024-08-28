import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { booksReducer } from './booksRedux';


const subreducers = {
    books: booksReducer,
}

const reducer = combineReducers(subreducers);

const initialState = {
    // books: [
    //     {id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
    //     {id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'},
    // ]
}; 

const store = createStore(
    reducer,
    initialState, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store; 