import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Rating from '../../components/Rating/Rating'
import Section from '../../components/Section/Section'
import Brand from '../Brand/Brand'
import './AboutPage.css'

const AboutPage = ({name, img, description, change1, change2, change3}) =>{
    return(
        <div className="aboutPage">
            <About img={img} name={name} description={description} change1={change1} change2={change2} change3={change3} />
            <Section />
            <Rating />
            <Brand />
            <Footer />
        </div>
    )
}
export default AboutPage