import React from "react";
import Book from "./book";

const BookList = ({ books }) => {
  const list = books.map((book) => {
    return (
      <Book
        key={book.id}
        title={book.title}
        img={book.img}
        author={book.author}
      />
    );
  });

  return list;
};

export default BookList;
