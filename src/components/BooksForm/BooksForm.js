import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookRequest } from "../../redux/booksRedux.js";

const BooksForm = () => {

    const dispatch = useDispatch(); 

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(addBookRequest({title, author})); // funkcja handleSubmit ma dostęp do zakresu wyżej i można przekazać to do bookRedux tam do addBookRequest(newBook)
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
            <button>Add books</button>
        </form>
    );
};

export default BooksForm;

