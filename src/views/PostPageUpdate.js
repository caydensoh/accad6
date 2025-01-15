import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PostPageUpdate() {
  const location = useLocation(); // Access location state
  const navigate = useNavigate();
  
  const [book, setBook] = useState(null);
  const [updateKey, setUpdateKey] = useState(""); 
  const [updateValue, setUpdateValue] = useState(""); 

  const { bookId } = location.state || {}; // Get the bookId from location.state

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-singleton?book_id=${bookId}`);
        if (!response.ok) {
          console.error("Failed to fetch book details:", response.statusText);
          return;
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    }

    if (bookId) fetchBook();  // Only fetch if bookId exists

  }, [bookId]);

  async function handleUpdate() {
    try {
      const updateData = {
        book_id: bookId,
        updateKey: updateKey,
        updateValue: updateValue,
      };

      const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-singleton?book_id=${bookId}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        console.log("Book updated successfully!");
        navigate('/'); // Redirect after successful update
      } else {
        console.error("Failed to update the book:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>Update Book: {book.title}</h1>
      <div>
        <label>
          Update Key (Field to update):
          <input 
            type="text" 
            value={updateKey} 
            onChange={(e) => setUpdateKey(e.target.value)} 
            placeholder="e.g., author, title" 
          />
        </label>
      </div>
      <div>
        <label>
          New Value:
          <input 
            type="text" 
            value={updateValue} 
            onChange={(e) => setUpdateValue(e.target.value)} 
            placeholder={`Enter new value for ${updateKey}`}
            style={{
              backgroundColor: '#f0f0f0',
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"><text x="10" y="30" font-family="Arial" font-size="20" fill="grey">${book[updateKey] || 'No current value'}</text></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
              backgroundSize: 'auto 90%',
            }}
          />
        </label>
      </div>
      <button onClick={handleUpdate}>Update Book</button>
    </div>
  );
}