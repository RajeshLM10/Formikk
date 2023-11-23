import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';

const Books = ({ books, onAddBook, onEditBook, onDeleteBook }) => (
  <div>
    <h2>Books</h2>
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          {`${book.title} by ${book.author}, ISBN: ${book.isbn}, Published on: ${book.publicationDate}`}
          <button onClick={() => onEditBook(index)}>Edit</button>
          <button onClick={() => onDeleteBook(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

const Authors = ({ authors, onAddAuthor, onEditAuthor, onDeleteAuthor }) => (
  <div>
    <h2>Authors</h2>
    <ul>
      {authors.map((author, index) => (
        <li key={index}>
          {`${author.authorName}, Born on: ${author.birthDate}, Biography: ${author.biography}`}
          <button onClick={() => onEditAuthor(index)}>Edit</button>
          <button onClick={() => onDeleteAuthor(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

const Dashboard = () => {
  const [books, setBooks] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);

  const handleAddBook = (newBook) => setBooks([...books, newBook]);
  const handleEditBook = (index) => console.log(`Edit book at index ${index}`);
  const handleDeleteBook = (index) => setBooks(books.filter((_, i) => i !== index));

  const handleAddAuthor = (newAuthor) => setAuthors([...authors, newAuthor]);
  const handleEditAuthor = (index) => console.log(`Edit author at index ${index}`);
  const handleDeleteAuthor = (index) => setAuthors(authors.filter((_, i) => i !== index));

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/books" element={<BookForm books={books} onAddBook={handleAddBook} onEditBook={handleEditBook} onDeleteBook={handleDeleteBook} />} />
          <Route path="/authors" element={<AuthorForm authors={authors} onAddAuthor={handleAddAuthor} onEditAuthor={handleEditAuthor} onDeleteAuthor={handleDeleteAuthor} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;
