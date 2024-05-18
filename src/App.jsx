import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Apis from "./pages/Apis";
import Projects from "./pages/Projects";
import AlbumPage from "./pages/Aboiut";
import MainMenu from "./pages/MainMenu";
import AnimationContextProvider from "./context/AnimationContext";
import CV from "./components/CV";

function App() {
  return (
    <AnimationContextProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="cv" element={<CV />} />
          <Route path="portfolio" element={<AppShell />}>
            <Route index element={<Projects />} />
            <Route path="apis" element={<Apis />} />
            <Route path="about" element={<AlbumPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimationContextProvider>
  );
}

export default App;
