import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Apis from "./pages/Apis";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AlbumPage from "./pages/AlbumPage";
import ExperimentShell from "./components/shells/ExperimentShell";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppShell />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "experiments",
          element: <ExperimentShell />,
          children: [
            {
              path: "albums",
              element: <AlbumPage />,
            },
            {
              path: "apis",
              element: <Apis />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
