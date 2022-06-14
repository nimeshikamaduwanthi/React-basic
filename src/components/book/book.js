import React from "react";

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

export default Book;
