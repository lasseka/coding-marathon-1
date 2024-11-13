import React, { useState } from "react";
import "./BookCollectionManager.css"

function BookCollectionManager() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");


  // Add a new book to the list
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "" && year.trim() !== "") {
      setBooks((b) => [...b, { title, author, year }]);
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks); // Update the state with the new list
  }

  return (
    <div className="book-collection-manager">
      <h1>Book Collection Manager</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year of Publication"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button className="add-button" onClick={addBook}>
          Add Book
        </button>
      </div>
      <ol>
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <span className="book-title">{book.title}</span>
            <span className="book-author">by {book.author}</span>
            <span className="book-year">({book.year})</span>
            <button className="delete-button" onClick={() => deleteBook(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;