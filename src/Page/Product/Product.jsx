import Category from '../../components/Category/Category'
import Footer from '../../components/Footer/Footer'
import Rating from '../../components/Rating/Rating'
import Section from '../../components/Section/Section'
import Brand from '../Brand/Brand'
import './Product.css'


const Product = () =>{
    return(
        <div className="product">
            <Category />
            <Section />
            <Rating />
            <Brand />
            <Footer />
        </div>
    )
}
export default Product