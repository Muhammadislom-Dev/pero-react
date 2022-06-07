import Home from "./Page/Home/Home";
import HeaderInput from "./Page/HeaderInput/HeaderInput";
import Section from "./components/Section/Section";
import Rating from "./components/Rating/Rating";
import Brand from './Page/Brand/Brand'
import Footer from "./components/Footer/Footer";
import './App.css'
import { Switch, Route } from "react-router-dom";
import Aos from "aos"
import "aos/dist/aos.css"
import  {useEffect}  from 'react'
import Product from "./Page/Product/Product";
import AboutPage from "./Page/AboutPage/AboutPage";


function App() {
  useEffect(() =>{
    Aos.init({});
  }, []);

  return (
    <div className="App">
          <Switch>

            <Route exact path="/" >
              <HeaderInput />
              <Home />
              <Section />
              <Rating />
              <Brand />
              <Footer />
            </Route>
            <Route path="/category">
                <Product />
            </Route>
            <Route path="/about">
               <AboutPage />
            </Route>
          </Switch>
    </div>
  );
}



export default App;