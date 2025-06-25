import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu"; //renamed here
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as CreateOrderaction,
} from "./features/order/CreateOrder";
import AppLayuot from "./ui/AppLayout";
import Cart from "./features/cart/Cart";

import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayuot />,
    errorElement: <Error />, //checked eror here before routing is not wrong route  like that
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderaction,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
