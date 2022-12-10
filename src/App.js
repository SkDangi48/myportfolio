import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
//import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Works from "./components/Works/Works";
import Home from "./components/Home";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Router>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route path="/intro" element={<Intro/>} />
      <Route path="skills" element={<Services/>} />
      <Route path="experience" element={<Experience/>} />
      <Route path="portfolio" element={<Portfolio/>} />
      <Route path="works" element={<Works/>} />
      <Route path="contact" element={<Contact/>} />
       
        </Routes>
    
      </Router>
      <Footer />
    </div>
  );
}

export default App;
