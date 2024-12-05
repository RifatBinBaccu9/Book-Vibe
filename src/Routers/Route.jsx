import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookDetailsPage from "../Component/BookDetailsPage/BookDetailsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children:[
        {
            path: "/",
            element: <Home />
        },{
            path: "/BookDetailsPage/:bookId",
            element: <BookDetailsPage />,
            loader: ()=> fetch('../../public/Book.json')
        },
        {
            path: "/ListedBooks",
            element: <ListedBooks />,
            loader: ()=> fetch('../../public/Book.json'),
        },
        {
          path: "/ReadBooks",
          element: <div>Read</div>
        },
        {
            path: "/PagesToRead",
            element: <div>Pages To Read</div>
        }
      ]
    },
  ]);

  export default router