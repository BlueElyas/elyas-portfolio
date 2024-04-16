import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Api from "./pages/Api";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppShell />,
      children: [
        {
          path: "apis",
          element: <Api />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
