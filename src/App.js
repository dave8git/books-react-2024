import BooksForm from "./components/BooksForm/BooksForm";
import BooksList from "./components/BooksList/BooksList";
import { fetchBooks } from "./redux/booksRedux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import shortid from "shortid";

function App() {
  const dispatch = useDispatch(); 
  // const fetchBooks = () => {
  //   fetch('http://localhost:3131/api/books')
  //   .then(res => res.json())
  //   .then(books => dispatch(updateBooks(books)));
  // }

  useEffect(() => dispatch(fetchBooks()), [dispatch]); // fetchBooks włączy się dopiero wtedy kiedy dispatch będzie istnieć


  return (
    <>
      <h1>Hello to books app!</h1>
      <BooksList />
      <BooksForm />
    </>
  );
}

export default App;
