import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPageHome from "./views/PostPageHome";
import PostPageAdd from "./views/PostPageAdd";
import PostPageDetails from "./views/PostPageDetails";
import PostPageUpdate from "./views/PostPageUpdate";
// import express from 'express';
// import cors from 'cors';


function App() {
  // const app = express();
  // app.use(cors());

  const router = createBrowserRouter([
    { path: "/", element: <PostPageHome /> },
    { path: "/add", element: <PostPageAdd /> },
    { path: "/book/:id", element: <PostPageDetails /> },
    { path: "/update/:id", element: <PostPageUpdate /> }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}


export default App;
