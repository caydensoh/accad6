import React, { useEffect, useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import SiteNav from "../templates/SiteNav";

export default function PostPageUpdate() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    published_year: '',
    genre: '',
  });

  useEffect(() => {
    async function getBookDetails() {
      try {
        const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book/${bookId}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }

    getBookDetails();
  }, [bookId]);

  async function handleUpdate() {
    try {
      const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book/${bookId}`, {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        navigate(`/book/${bookId}`);
      } else {
        console.error("Failed to update the book:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }

  return (
    <div>
      <h1>Update Book</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Title:
          <input
            type="text"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </label>
        <br />
        <label>
          Published Year:
          <input
            type="text"
            value={book.published_year}
            onChange={(e) => setBook({ ...book, published_year: e.target.value })}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handleUpdate}>Update Book</button>
      </form>
    </div>
  );
}
