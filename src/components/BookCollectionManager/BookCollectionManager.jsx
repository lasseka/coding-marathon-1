import React, { useState } from "react";
import "./BookCollectionManager.css"
import Book from "./Book"


function BookCollectionManager() {

  // I decided to keep this part simple
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");


  // Add a new book to the list
  // I first did few mistakes with the setBooks function as the Task template did the setting a bit differently.
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "" && year.trim() !== "") {
      setBooks((b) => [...b, { title, author, year }]);
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }

  // Delete a book from the list
  // This was tricky for me to understand at first.
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks); // Update the state with the new list
  }

  // I had few errors with the mapping of the books after refactoring. Luckily it was easy to fix. The onChanges in inputs were easy as I just did those on pair programming.
  // I could have named the classes better and think about the css as I was writing this part and not afterwards.
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
      <ol className="book-list">
      {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            year={book.year}
            onDelete={() => deleteBook(index)}
          />
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;