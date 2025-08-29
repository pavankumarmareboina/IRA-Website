import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Playschool from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch("/data.json").then(() => setDataLoaded(true));
  }, []);

  if (!dataLoaded) {
    return <div className="text-center py-20 text-lg">Loading...</div>;
  }

  return (
    <Router>
      <div >
        <Navbar />
      </div>
      <div className=" bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/tutionfee" element={<Impact />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div >
        <Footer />
      </div>
    </Router>
  );
}

export default App;
