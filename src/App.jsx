import "./App.css";
import Navigator from "./components/header";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Home />
      <About />
      <Skills />
      <Project />
      <Certificate />
      <Contact />
    </HashRouter>
  );
}

export default App;
