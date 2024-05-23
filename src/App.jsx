import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/shells/appshell";
import Projects from "./pages/Projects";
import MainMenu from "./pages/MainMenu";
import AnimationContextProvider from "./context/AnimationContext";
import CV from "./components/CV";
import ProjectCards from "./components/projects/ProjectCards";

function App() {
  return (
    <AnimationContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="cv" element={<CV />} />
          <Route path="home" element={<AppShell />}>
            <Route index element={<Navigate to="portfolio" />} />
            <Route path="portfolio" element={<Projects />}>
              <Route path=":slug" element={<ProjectCards />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimationContextProvider>
  );
}

export default App;
