import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Authors from "./pages/author/Authors";
import Books from "./pages/books/Books";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/authors",
    element: <Authors />,
  },
  {
    path: "/books",
    element: <Books />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
