import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Apis from "./pages/Apis";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AlbumPage from "./pages/AlbumPage";
import ExperimentShell from "./components/shells/ExperimentShell";
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
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experiments" element={<ExperimentShell />} />
          <Route path="experiments/apis" element={<Apis />} />
          <Route path="experiments/albums" element={<AlbumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
