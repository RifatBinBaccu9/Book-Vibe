import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/ListedBooks",
            element: <div>Listed Books</div>
        },
        {
            path: "/PagesToRead",
            element: <div>Pages To Read</div>
        }
      ]
    },
  ]);

  export default router