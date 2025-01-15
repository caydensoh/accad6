import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPageHome from "./views/PostPageHome";
import PostPageAdd from "./views/PostPageAdd";
import PostPageDetails from "./views/PostPageDetails";
import PostPageUpdate from "./views/PostPageUpdate";
import axios from 'axios'; 
import cors from 'cors';

 
function App() { 
  const [posts, setPosts] = useState([]);
  const express = require('express');
  const cors = require('cors');
  const app = express();

  // CORS configuration
  app.use(cors({
      origin: 'http://localhost:3000', // or your deployed React app URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type'],
  }));

  // Your API endpoints
  app.get('/data', (req, res) => {
      res.json({ message: 'Hello from AppRunner backend!' });
  });

  // Listen on port 8080 for AppRunner
  app.listen(8080, () => {
      console.log('Server running on port 8080');
  });

  const router = createBrowserRouter([
    { path: "/", element: <PostPageHome /> },
    { path: "/add", element: <PostPageAdd /> },
    { path: "/post/:id", element: <PostPageDetails /> },
    { path: "/update/:id", element: <PostPageUpdate /> }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}


export default App;
