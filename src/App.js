import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Policies from "./components/Policies/Policies";
import SpotlightBottomSection from "./components/Spotlight/SpotlightBottomSection";
import SpotlightSection from "./components/Spotlight/SpotlightSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <Policies />
        <SpotlightSection />
        <SpotlightBottomSection />
        <div className="temp" style={{ height: "200px" }}></div>
      </div>
    </div>
  );
}

export default App;
