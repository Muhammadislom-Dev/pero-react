import Home from "./Page/Home/Home";
import HeaderInput from "./Page/HeaderInput/HeaderInput";
import Section from "./components/Section/Section";
import Rating from "./components/Rating/Rating";
import Brand from './Page/Brand/Brand'
import Footer from "./components/Footer/Footer";
import './App.css'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Aos from "aos"
import "aos/dist/aos.css"
import  {useEffect, useState}  from 'react'
import Product from "./Page/Product/Product";
import AboutPage from "./Page/AboutPage/AboutPage";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";


function App() {
  useEffect(() =>{
    Aos.init({});
  }, []);

  const [data, setData] = useState([])

    useEffect( async () => {

        fetch(`http://93.189.40.27:4500/products/?format=json`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])


    const { t, i18n } = useTranslation()

    const [english, setEnglish] = useState(true);
    const [russian, setRussian] = useState(false);
    const [uzbek, setUzbek] = useState(false)
    const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "") 

  function change1(item) {  
    i18n.changeLanguage("ru") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setRussian(item)
    setEnglish(!item)
    setUzbek(!item)   
  }
  function change2(item) {
    i18n.changeLanguage("en") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setEnglish(item)
    setRussian(!item)
    setUzbek(!item) 
  }
  function change3(item) { 
    i18n.changeLanguage("uz") 
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
     
  }


window.addEventListener("load", () => {    
  setRussian(true) 
  setEnglish(false) 
  localStorage.setItem("i18nextLng", "en") 
  setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  console.log("ALI")   
})
console.log(localStorage.getItem('i18nextLng'))  

  return (
      <BrowserRouter>
    {/* <div className="App"> */}
          <Switch>
            <Route exact path="/" >
              <HeaderInput change1={change1} change2={change2} change3={change3} uzbek={uzbek} russian={russian} english={english} />
              <Home />
              <Section />
              <Rating />
              <Brand />
              <Footer />
            </Route>
            <Route path="/category">
                <Product />
            </Route>
            {data.map((item) => (
              <Route path={`/about${item.id}`}>
                {english &&
                  <AboutPage img={item.image} name={item.name} description={item.description_en} change1={change1} change2={change2} change3={change3} />
                }
                {russian &&
                  <AboutPage img={item.image} name={item.name_ru} description={item.description_ru} change1={change1} change2={change2} change3={change3} />
                }
                {uzbek &&
                  <AboutPage img={item.image} name={item.name_uz} description={item.description_uz} change1={change1} change2={change2} change3={change3} />
                }
              </Route>
            ))}
          </Switch>
    {/* </div> */}
      </BrowserRouter>
  );
}



export default App;