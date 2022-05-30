import React from "react";
import Company from "./components/Company/Company";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Section />
        <Company />
    </div>
  );
}



export default App;