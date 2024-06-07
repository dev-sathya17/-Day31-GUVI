import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/authors",
    element: <div>Authors</div>,
  },
  {
    path: "/books",
    element: <div>Books</div>,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
