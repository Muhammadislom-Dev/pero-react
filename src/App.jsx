import React from "react";
import Home from "./Page/Home/Home";
import HeaderInput from "./Page/HeaderInput/HeaderInput";
import Section from "./components/Section/Section";
import Rating from "./components/Rating/Rating";
import Brand from './Page/Brand/Brand'

function App() {
  return (
    <div className="App">
        <HeaderInput />
        <Home />
        <Section />
        <Rating />
        <Brand />
    </div>
  );
}



export default App;