// BookDetails.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../../data/books.json'; // Import the JSON data directly

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    setBook(booksData.find(b => b.id === parseInt(id, 10))); // Use the imported JSON data directly
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.synopsis}</p>
    </div>
  );
};

export default BookDetails;
