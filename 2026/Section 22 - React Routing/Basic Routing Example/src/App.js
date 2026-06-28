import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import PageNotFound from "./components/PageNotFound";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/", element: < RootLayout/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> }
    ],
    errorElement: <PageNotFound/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
