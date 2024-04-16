import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Apis from "./pages/Apis";
import Home from "./pages/Home";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
