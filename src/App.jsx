import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import usePageTracking from "./usePageTracking";

export default function App() {
  usePageTracking();

  return (
    <>
      <Router>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}