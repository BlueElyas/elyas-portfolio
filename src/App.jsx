import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Apis from "./pages/Apis";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

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
          path: "apis",
          element: <Apis />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
