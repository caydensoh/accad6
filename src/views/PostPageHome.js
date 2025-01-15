import { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteNav from "../templates/SiteNav";


export default function PostPageHome() {
  const [books, setBooks] = useState([]);

  async function getAllBooks() {
    try {
      const response = await fetch("https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-multiple"); // , {
      if (!response.ok) {
        console.error("Failed to fetch books:", response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data)
      setBooks(data["book-multiple"] || []); 
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  async function deleteBook(bookId) {
    try {
      const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book/${bookId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setBooks(books.filter((book) => book.book_id !== bookId));
      } else {
        console.error("Failed to delete the book:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.book_id}>
            <strong>{book.title}</strong> by {book.author} ({book.published_year}) - {book.genre}
            <div>
              <Link to={`/book/${book.book_id}`}>View Details</Link> | 
              <Link to={`/update/${book.book_id}`}>Update</Link> | 
              <button onClick={() => deleteBook(book.book_id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add">Add New Book</Link>
    </div>
  );
}