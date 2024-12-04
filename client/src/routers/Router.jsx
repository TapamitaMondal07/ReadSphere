import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/home/books/CartPage";
import CheckoutPage from "../pages/home/books/CheckoutPage";
import SingleBook from "../pages/home/books/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
    {
        path: "/",
        element: <Home/>,
    }, 
    {
      path: "/orders",
      element: <div>Orders</div>
    },
    {
      path: "/about",
      element: <div>About</div>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/cart",
      element: <CartPage/>
    },
    {
      path: "/checkout",
      element: <CheckoutPage/>
    },
    {
      path: '/books/:id',
      element: <SingleBook/>
    }
  ]
  },
]);

export default router;