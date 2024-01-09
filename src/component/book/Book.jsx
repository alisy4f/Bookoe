// Bookshelf.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import booksData from '../../data/books.json';


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      <h1>Bookshelf</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`${book.id}`}>
              {book.id}. {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
