import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Rating from '../../components/Rating/Rating'
import Section from '../../components/Section/Section'
import Brand from '../Brand/Brand'
import './AboutPage.css'

const AboutPage = () =>{
    return(
        <div className="aboutPage">
            <About />
            <Section />
            <Rating />
            <Brand />
            <Footer />
        </div>
    )
}
export default AboutPage