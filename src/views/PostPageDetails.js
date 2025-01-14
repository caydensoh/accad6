import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import SiteNav from "../templates/SiteNav";


export default function PostPageDetails() {
  return <h1>page details</h1>;
  // const [caption, setCaption] = useState("");
  // const [image, setImage] = useState("");
  // const params = useParams();
  // const id = params.id;
  // const navigate = useNavigate();

  // async function deletePost(id) {
  //   await deleteDoc(doc(db, "posts", id));
  //   navigate("/");
  // }

  // async function getPost(id) {
  //   const postDocument = await fetch("API gateway here/{id}");
  //   if (!response.ok) {
  //      console.error("Failed to fetch posts:", response.statusText);
  //      return;
  //   }
  //   const post = await postDocument.json();
  //   setCaption(post.caption);
  //   setImage(post.image);
  // }

  // useEffect(() => {

  // return (
  //   <>
  //     <SiteNav/>
  //     <Container>
  //       <Row style={{ marginTop: "2rem" }}>
  //         <Col md="6">
  //           <Image src={image} style={{ width: "100%" }} />
  //         </Col>
  //         <Col>
  //           <Card>
  //             <Card.Body>
  //               <Card.Text>{caption}</Card.Text>
  //               <Card.Link href={`/update/${id}`}>Edit</Card.Link>
  //               <Card.Link
  //                 onClick={() => deletePost(id)}
  //                 style={{ cursor: "pointer" }}
  //               >
  //                 Delete
  //               </Card.Link>
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Container>
  //   </>
  // );
}