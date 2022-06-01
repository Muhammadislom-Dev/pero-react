import React from "react";
import Home from "./Page/Home/Home";
import HeaderInput from "./Page/HeaderInput/HeaderInput";
import Section from "./components/Section/Section";
import Rating from "./components/Rating/Rating";
import Brand from './Page/Brand/Brand'
import Footer from "./components/Footer/Footer";

import Aos from "aos"
import "aos/dist/aos.css"
import  {useEffect}  from 'react'

function App() {

  useEffect(() =>{
    Aos.init({});
  }, []);

  return (
    <div className="App">
        <HeaderInput />
        <Home />
        <Section />
        <Rating />
        <Brand />
        <Footer />
    </div>
  );
}



export default App;