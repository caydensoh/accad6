import React, { useEffect, useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import SiteNav from "../templates/SiteNav";
import { S3 } from 'aws-sdk';

export default function PostPageUpdate() {
  return <h1>update page</h1>;
  // const params = useParams();
  // const id = params.id;
  // const [caption, setCaption] = useState("");
  // const [image, setImage] = useState("");
  // const [previewImage, setPreviewImage] = useState("https://zca.sg/img/placeholder");
  // const navigate = useNavigate();

  // async function updatePost() {
  //   let imageUrl = "";
    
  //   if (image && image.name) {
  //       const s3 = new S3();
  //       const imageKey = `images/${image.name}`;

  //       // Upload the image to S3
  //       const uploadParams = {
  //           Bucket: 'your-bucket-name',  // Replace with your S3 bucket name
  //           Key: imageKey,
  //           Body: image,  // The image file to upload
  //           ContentType: image.type  // Optional: Set the content type
  //       };

  //       try {
  //           // Upload the image
  //           const s3Response = await s3.upload(uploadParams).promise();
  //           imageUrl = s3Response.Location;  // Get the URL of the uploaded image
  //       } catch (error) {
  //           console.error("Error uploading image to S3:", error);
  //           return;
  //       }
  //   } else {
  //       imageUrl = image;  // If there's no new image, use the existing image URL
  //   }

  //   // Now, update the post in DynamoDB with the new caption and image URL
  //   const dynamoDB = new AWS.DynamoDB.DocumentClient();

  //   const params = {
  //       TableName: 'PostsTable',  // Replace with your DynamoDB table name
  //       Key: { id: id },  // The primary key to find the post
  //       UpdateExpression: 'set caption = :caption, image = :image',
  //       ExpressionAttributeValues: {
  //           ':caption': caption,  // New caption
  //           ':image': imageUrl,   // New image URL
  //       },
  //       ReturnValues: 'UPDATED_NEW'
  //   };

  //   try {
  //       // Update the post in DynamoDB
  //       await dynamoDB.update(params).promise();
  //       navigate('/');  // Redirect after the update
  //   } catch (error) {
  //       console.error("Error updating post in DynamoDB:", error);
  //   }
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
  //   if (loading) return;
  //   if (!user) navigate("/login");
  //   getPost(id);
  // }, [id, navigate, user, loading]);

  // return (
  //   <div>
  //     <SiteNav/>
  //     <Container>
  //       <h1 style={{ marginBlock: "1rem" }}>Update Post</h1>
  //       <Form>
  //         <Form.Group className="mb-3" controlId="caption">
  //           <Form.Label>Caption</Form.Label>
  //           <Form.Control
  //             type="text"
  //             placeholder="Lovely day"
  //             value={caption}
  //             onChange={(text) => setCaption(text.target.value)}
  //           />
  //         </Form.Group>

  //         <Image
  //           src={previewImage}
  //           style={{
  //             objectFit: "cover",
  //             width: "10rem",
  //             height: "10rem",
  //           }}
  //         />
          
  //         <Form.Group className="mb-3" controlId="image">
  //         <Form.Label>Image</Form.Label>
  //           <Form.Control
  //             type="file"
  //             onChange={(e) => {
  //               const imageFile = e.target.files[0];
  //               const previewImage = URL.createObjectURL(imageFile);
  //               setImage(imageFile);
  //               setPreviewImage(previewImage);
  //             }}
  //           />
  //           <Form.Text className="text-muted">
  //             Make sure the url has a image type at the end: jpg, jpeg, png.
  //           </Form.Text>
  //         </Form.Group>
  //         <Button variant="primary" onClick={(e) => updatePost()}>
  //           Submit
  //         </Button>
  //       </Form>
  //     </Container>
  //   </div>
  // );
}