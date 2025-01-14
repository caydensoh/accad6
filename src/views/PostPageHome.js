import { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";


export default function PostPageHome() {
  return <h1>Home Page</h1>;
//   const [posts, setPosts] = useState([]);
//   async function getAllPosts() {
//     const query = await fetch("API gateway here");
//     if (!response.ok) {
//        console.error("Failed to fetch posts:", response.statusText);
//        return;
//     }
//     const posts = await query.json()
//     });
//     setPosts(posts);
//   }

//   useEffect(() => {
//     getAllPosts();
//   }, []);

//   const ImagesRow = () => {
//     return posts.map((post, index) => <ImageSquare key={index} post={post} />);
//   };

//   return (
//     <>
//       <SiteNav/>
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
}