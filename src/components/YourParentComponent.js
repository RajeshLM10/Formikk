// YourParentComponent.js
import React, { useState } from 'react';
import BookForm from './BookForm';

const YourParentComponent = () => {
  const [bookData, setBookData] = useState([]);

  const handleBookSubmit = async (values) => {
    try {
      setBookData((prevData) => [...prevData, values]);
      // Simulate an async operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Book submitted successfully!');
    } catch (error) {
      console.error('Error submitting book:', error);
      alert('Error submitting book. Please try again.');
    }
  };

  return (
    <div>
      <h1>Your Library</h1>
      <BookForm onSubmit={handleBookSubmit} />

      <h2>Submitted Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Publication Date</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourParentComponent;
