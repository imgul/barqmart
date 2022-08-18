import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hero />
      </div>
    </div>
  );
}

export default App;
