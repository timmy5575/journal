// Hero.jsx
import { useState, useEffect } from "react";
import './greeting.css';

export default function Hero() {
  const messages = [
    { title: "Welcome", text: "What were your highlights of today?" },
    { title: "Hello Again", text: "Did you complete your goals?" },
    { title: "Keep Going!", text: "Small steps lead to big results." },
    { title: "You're Doing Great!", text: "Stay positive and consistent." },
  ];

  const [ind, setInd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInd((prevInd) => (prevInd + 1) % messages.length);
    }, 5000); // every 4 sec

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="hero">
      <h1 className="fade">{messages[ind].title}</h1>
      <p className="fade">{messages[ind].text}</p>
    </div>
  );
}
