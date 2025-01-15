import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPageHome from "./views/PostPageHome";
import PostPageAdd from "./views/PostPageAdd";
import PostPageDetails from "./views/PostPageDetails";
import PostPageUpdate from "./views/PostPageUpdate";


function App() {

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
