import React from "react";
import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";
import DiscLinks from "../components/DiscLinks.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {

  return (
    <div className="pt-[12vh] w-full h-screen flex flex-col">
      <Hero/>
      <DiscLinks/>
    </div>
  );
}
