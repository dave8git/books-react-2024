import BooksForm from "./components/BooksForm/BooksForm";
import BooksList from "./components/BooksList/BooksList";
import { useState } from 'react';
import shortid from "shortid";

function App() {

  return (
    <>
      <h1>Hello to books app!</h1>
      <BooksList />
      <BooksForm />
    </>
  );
}

export default App;
