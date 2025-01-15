import { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteNav from "../templates/SiteNav";


export default function PostPageHome() {
  const [books, setBooks] = useState([]);

  async function getAllBooks() {
    try {
      console.log('this is');
      //fetch('https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-multiple').then(response => response.json()).then(data => console.log(data));
      const response = await fetch("https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-multiple"); // , {
        // method: 'GET',  // or POST, PUT, DELETE, etc.
        // headers: {
        //     'Content-Type': 'application/json',
        //     // Any other custom headers here
        // },
        // mode: 'cors',  // Ensures CORS headers are included in the request
        // });
      console.log("weird");
      if (!response.ok) {
        console.error("Failed to fetch books:", response.statusText);
        return;
      }
      const data = await response.json();
      console.log(data)
      setBooks(data.employees || []); // Assuming "employees" is the root key
    } catch (error) {
      console.error("Error fetching books:", error);
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
          </li>
        ))}
      </ul>
    </div>
  );
}

//   const [posts, setPosts] = useState([]);
//   async function getAllPosts() {
//     const query = await fetch("https://7pr3rszc92.execute-api.ap-southeast-1.amazonaws.com/book-production/book-multiple");
//     if (!query.ok) {
//        console.error("Failed to fetch posts:", query.statusText);
//        return;
//     }
//     const posts = await query.json()
//     setPosts(posts);
//   }

//   useEffect(() => {
//     getAllPosts();
//   }, []);

//   const ImagesRow = () => {
//     return posts.map((post, index) => <ImageSquare key={index} post={post} />);
//   };
// // <SiteNav/>
//   return (
//     <>
      
//       <Container>
//         <Row>
//           <ImagesRow />
//         </Row>
//       </Container>
//     </>
//   );
// }

// function ImageSquare({ post }) {
//   const { image, id } = post;
//   return (
//     <Link
//       to={`post/${id}`}
//       style={{
//         width: "18rem",
//         marginLeft: "1rem",
//         marginTop: "2rem",
//       }}
//     >
//       <Image
//         src={image}
//         style={{
//           objectFit: "cover",
//           width: "18rem",
//           height: "18rem",
//         }}
//       />
//     </Link>
//   );
//}