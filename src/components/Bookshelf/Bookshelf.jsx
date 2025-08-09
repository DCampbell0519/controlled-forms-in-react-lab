import React from "react";
import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    console.log(event);
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, {title: newBook.title, author: newBook.author}]);
    setNewBook({
      title: "",
      author: "",
    });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={newBook.title}
              onChange={handleInputChange}
            />

            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              value={newBook.author}
              onChange={handleInputChange}
            />

            <button type="submit">Submit your Book</button>
          </form>
        </div>

          {books.map((book) => (
            <div className="bookCardsDiv">
              <h2>{book.title}</h2>
              <p>By: {book.author}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Bookshelf;
