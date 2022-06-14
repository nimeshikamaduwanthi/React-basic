import React from "react";
import BookList from "../components/book/book-list";
import { BOOK_DATA } from "../store/book-data";

const BookPage = () => {
  return (
    <section className="bookList">
      <BookList books={BOOK_DATA} />
    </section>
  );
};

export default BookPage;
