import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  let [darkMode, setDarkMode] = useState(localStorage.theme === 'dark' ? true : false);

  const handleModeChange = () => {
    if (darkMode === true) {
      document.documentElement.classList.remove("dark")
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add("dark")
      localStorage.theme = 'dark'
    }
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (!darkMode
    ) {
      document.documentElement.classList.remove("dark");

    } else {
      document.documentElement.classList.add("dark");

    }
  }, []);
  return (
    <div className="dark:text-white dark:bg-zinc-700">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
    </div>
  );
}
