import React from "react";
import "./App.css";

import Home from "./pages/Home/Home.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import Opensource from "./pages/Opensource/Opensource.tsx";
import Tutoring from "./pages/Dsapage/Dsapage.tsx";
import Dsapage from "./pages/Dsapage/Dsapage.tsx";

import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";

function App() {
  const dispatch = useDispatch();

  return (
    <body>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dsa" element={<Dsapage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/open-source" element={<Opensource />}></Route>
          <Route path="/tutor-services" element={<Tutoring />}></Route>
        </Routes>
      </div>
    </body>
  );
}

export default App;
