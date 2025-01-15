import React, { useEffect, useState } from "react";
import { Button, Container, Image, Form} from "react-bootstrap";
import SiteNav from "../templates/SiteNav";
import { useLocation, useNavigate } from 'react-router-dom';

export default function PostPageAdd() {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    published_year: '',
    genre: '',
  });

  const navigate = useNavigate();

  async function handleAdd() {
    try {
      const response = await fetch('https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-singleton', {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        navigate('/');
      } else {
        console.error("Failed to add the book:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }

  return (
    <div>
      <h1>Add New Book</h1>
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
