import BooksForm from "./components/BooksForm/BooksForm";
import BooksList from "./components/BooksList/BooksList";
import { useState } from 'react';
import shortid from "shortid";

function App() {
  const [books, setBooks] = useState([ //funkcja use state zwraca tablicę
    {id: 1, title: 'of Mice and Men', author: 'John Steinbeck' },
    {id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'},
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId)); 
  }

  const addBook = newBook => {
    setBooks([...books, {id: shortid(), title: newBook.title, author: newBook.author }]);
  }

  return (
    <>
      <h1>Hello to books app!</h1>
      <BooksList books={books} removeBook={removeBook} />
      <BooksForm addBook={addBook} />
    </>
  );
}

export default App;
