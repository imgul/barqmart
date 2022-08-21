import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Policies from "./components/Policies/Policies";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
        <Policies />
        <div className="temp" style={{ height: "200px" }}></div>
      </div>
    </div>
  );
}

export default App;
