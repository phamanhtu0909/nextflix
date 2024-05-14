import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import MovieManagement from "./pages/movie-management";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie-management",
    element: <MovieManagement />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
