import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

export default function PostPageUpdate() {
  const { bookId } = useParams(); 
  
  const [book, setBook] = useState(null);
  const [updateKey, setUpdateKey] = useState(""); // Key to update (author, title, etc.)
  const [updateValue, setUpdateValue] = useState(""); // New value for the key

  useEffect(() => {
    // Fetch the current book data using the bookId
    async function fetchBook() {
      try {
        const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-singleton/${bookId}`);
        if (!response.ok) {
          console.error("Failed to fetch book details:", response.statusText);
          return;
        }
        const data = await response.json();
        setBook(data); // Assuming the response gives you the full book object
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    }

    fetchBook();
  }, [bookId]);

  // Handle the PATCH request to update the book
  async function handleUpdate() {
    try {
      const updateData = {
        book_id: bookId,
        updateKey: updateKey,
        updateValue: updateValue,
      };

      const response = await fetch(`https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-multiple`, {
        method: 'PATCH', // Using PATCH method for partial updates
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        console.log("Book updated successfully!");
        Navigate('/'); 
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
              backgroundColor: '#f0f0f0', // Slight background color for the old value
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