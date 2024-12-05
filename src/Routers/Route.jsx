import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookDetailsPage from "../Component/BookDetailsPage/BookDetailsPage";
import ReadBook from "../Component/ReadBook/ReadBook";
import WishlistBooks from "../Component/WishlistBooks/WishlistBooks";

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
            children:[
              {
                path: "/ListedBooks",
                element: <ReadBook />,
                loader: ()=> fetch('../../public/Book.json'),
              },
              {
                path: "/ListedBooks/wishlistBooks",
                element: <WishlistBooks />
              },
            ]
        },
        {
            path: "/PagesToRead",
            element: <div>Pages To Read</div>
        }
      ]
    },
  ]);

  export default router