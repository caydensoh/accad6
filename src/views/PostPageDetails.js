import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostPageDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function getBookDetails() {
      try {
        const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-singleton/${bookId}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }

    getBookDetails();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Published Year:</strong> {book.published_year}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <Link to="/">Back to Book List</Link>
    </div>
  );
}
