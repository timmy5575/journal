import { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";


import Todo from "./to-do";
import Nav from "./nav.jsx";
import Hero from "./greetings";
import "./App.css";
import Weather from "./weather";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 3000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  if (load) {
    return (


<section className="loader">
  <div className="slider" style={{ "--i": 0 }}></div>
  <div className="slider" style={{ "--i": 1 }}></div>
  <div className="slider" style={{ "--i": 2 }}></div>
  <div className="slider" style={{ "--i": 3 }}></div>
  <div className="slider" style={{ "--i": 4 }}></div>
</section>

    );
  }

  return (
    <>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <section className="s1">
              <div className="hero">
                <Hero />
              </div>
              <Todo />
            </section>
          }
        />
       

        <Route path="/Weather" element={<Weather />} />
      </Routes>
    
    </>
  );
}

export default App;

