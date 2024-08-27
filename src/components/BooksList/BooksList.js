import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeBook } from "../../redux/store";

const BooksList = () => {
    const books = useSelector(state => state.books);
    const dispatch = useDispatch(); 

    const handleSubmit = bookId => {
        console.log('bookId', bookId)
        dispatch(removeBook(bookId));
    }

    return (
        <ul>
            {books.map(book => <li key={book.id}>{book.title} by {book.author}    <button onClick={() => handleSubmit(book.id)}>Remove Book!</button></li>)}
        </ul>
    );
};

export default BooksList; 