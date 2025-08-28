import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Playschool from "./pages/Playschool";
import Contact from "./pages/Contact";

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
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/playschool" element={<Playschool />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
