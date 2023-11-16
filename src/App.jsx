import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Calendar from "./pages/Calendar.jsx";
import Shop from "./pages/Shop.jsx";
import SilverSubs from "./pages/SilverSubs.jsx";
import Profile from "./pages/Profile.jsx";
import Cart from "./pages/Cart.jsx";
import { SuccessPage } from "./pages/SuccessPage.jsx";
import { CancelOrder } from "./pages/CancelOrder.jsx";

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
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Calendar" element={<Calendar/>} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SilverSubs" element={<SilverSubs/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelOrder />} />
      </Routes>
      <Footer/>
    </div>
  );
}
