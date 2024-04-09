import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppShell from "./components/shells/appshell";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppShell />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
