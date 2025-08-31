import { useState, useEffect } from "react";
// import RingLoader from "react-spinners/RingLoader";

import Todo from "./to-do";
import Nav from "./nav.jsx";
import Hero from "./greetings";
import "./App.css";

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




      // <main className="loading-page">
      //   <RingLoader color="#d736c7ff" size={150} speedMultiplier={1.5}  />
      // </main>
    );
  }

  return (
    <>
      <Nav />
      <section className="s1">
        <div className="hero">
          <Hero />
        </div>
        <Todo />
      </section>
    </>
  );
}

export default App;

