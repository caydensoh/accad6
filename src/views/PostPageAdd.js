import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function PostPageAdd() {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    published_year: '',
    genre: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleAdd() {
    try {
      console.log(newBook)
      const response = await fetch('https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-multiple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook), // Ensure no 'book_id' is included
      });

      if (response.ok) {
        const data = await response.json(); // Get the response body
        console.log("Book added successfully:", data);
        navigate('/'); // Redirect after success
      } else {
        const errorText = await response.text();
        console.error("Failed to add the book:", errorText);
        setError("Failed to add book: " + errorText);
      }
    } catch (error) {
      console.error("Error adding book:", error);
      setError("Error adding book. Please try again.");
    }
  }

  return (
    <div>
      <h1>Add New Book</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Title:
          <input
            type="text"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
        </label>
        <br />
        <label>
          Published Year:
          <input
            type="text"
            value={newBook.published_year}
            onChange={(e) => setNewBook({ ...newBook, published_year: e.target.value })}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            value={newBook.genre}
            onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handleAdd}>Add Book</button>
      </form>
    </div>
  );
}
