import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Apis from "./pages/Apis";
import Projects from "./pages/Projects";
import AlbumPage from "./pages/AlbumPage";
import MainMenu from "./components/shells/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Route
            path="/cv.html"
            element={<iframe src="/cv.html" title="CV" />}
          />
        </Route>

        <Route path="personal" element={<AppShell />}>
          <Route index element={<Projects />} />
          <Route path="apis" element={<Apis />} />
          <Route path="albums" element={<AlbumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
