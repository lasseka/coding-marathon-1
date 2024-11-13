
// I think this part is something I could have done better. I wanted to have the labels bolded as they were in the example and the span inside a span was the only way I found to achieve it.
//some classnames are probably useless but I decided to not touch those anymore as I start to run out of time.
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