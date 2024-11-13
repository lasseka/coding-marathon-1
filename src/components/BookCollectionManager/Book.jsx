function Book({ title, author, year, onDelete }) {
    return (
      <li className="book-item">
         <span className="book-title">{title}</span>
        <span className="book-author">
            <span className="author-label">Author: </span> {author}
        </span>
        <span className="book-year">
            <span className="year-label">Year: </span> {year}
        </span>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </li>
    );
}

export default Book;