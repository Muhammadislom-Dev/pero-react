import Navbar from '../Navbar/Navbar'
import './Category.css'
import { Link } from 'react-router-dom'
import pero from '../../Assets/img/peros.svg'
import pero1 from '../../Assets/img/pero1.png'
import pero2 from '../../Assets/img/pero2.png'
import pero3 from '../../Assets/img/peros.png'
import mgreen from '../../Assets/img/mgreen.png'
import mgren from '../../Assets/img/mgren.png'
import car from '../../Assets/img/car.png'
import check from '../../Assets/img/check.png'
import center from '../../Assets/img/callcenter.png'
import sticky from '../../Assets/img/Sticky.png'


const Category = () => {
    return(
       <div className="categorypage">
           <Navbar />
           <div className="category">
               <div className="container">
                   <div className="category-page">
                        <div className="category-list">
                            <Link to="/about">
                                <div className="category-span">
                                    <h5 className="category-pero">PERO</h5>
                                    <h4 className="category-name">Влажные салфетки</h4>
                                </div>
                                <div className="category-yellow">
                                    <img src={pero} alt="" className="category-img" />
                                </div>
                            </Link>
                        </div>
                        <div className="category-list">
                          <Link to="/about">
                            <div className="category-span">
                                    <h5 className="category-pero">PERO</h5>
                                    <h4 className="category-name">Влажные салфетки</h4>
                                </div>
                                <div className="category-yellow">
                                    <img src={pero1} alt="" className="category-picture" />
                                </div>
                          </Link>
                        </div>
                        <div className="category-list">
                            <Link to="/about">
                                <div className="category-span">
                                    <h5 className="category-pero">PERO</h5>
                                    <h4 className="category-name">Влажные салфетки</h4>
                                </div>
                                <div className="category-yellow">
                                    <img src={pero2} alt="" className="category-pics" />
                                </div>
                             </Link>
                        </div>
                        <div className="category-list">
                            <Link to="/about">
                                <div className="category-span">
                                    <h5 className="category-pero">PERO</h5>
                                    <h4 className="category-name">Влажные салфетки</h4>
                                </div>
                                <div className="category-yellow">
                                    <img src={pero2} alt="" className="category-pics" />
                                </div>
                             </Link>
                        </div>
                        <div className="category-list">
                            <Link to="/about">
                                <div className="category-span">
                                    <h5 className="category-pero">PERO</h5>
                                    <h4 className="category-name">Влажные салфетки</h4>
                                </div>
                                <div className="category-yellow">
                                    <img src={pero2} alt="" className="category-pics" />
                                </div>
                             </Link>
                        </div>
                        <div className="category-list">
                             <Link to="/about">
                                <div className="category-span">
                                    <h5 className="category-pero">PERO</h5>
                                    <h4 className="category-name">Влажные салфетки</h4>
                                </div>
                                <div className="category-yellow">
                                    <img src={pero2} alt="" className="category-pics" />
                                </div>
                             </Link>
                        </div>
                        <div className="category-list">
                            <Link to="/about">
                                <div className="category-span">
                                    <h5 className="category-pero">PERO</h5>
                                    <h4 className="category-name">Влажные салфетки</h4>
                                </div>
                                <div className="category-yellow">
                                    <img src={pero2} alt="" className="category-pics" />
                                </div>
                             </Link>
                        </div>
                        <div className="category-list">
                         <Link to="/about">
                            <div className="category-span">
                                <h5 className="category-pero">PERO</h5>
                                <h4 className="category-name">Влажные салфетки</h4>
                            </div>
                            <div className="category-yellow">
                                <img src={pero3} alt="" className="category-pic" />
                            </div>
                         </Link>
                        </div>
                   </div>
               </div>

                <img src={mgreen} alt="" className="header-greens" />
                <img src={mgren} alt="" className="header-grens" />
           </div>

           <div className="company">
               <div className="container">
                    <div className="company-box">
                        <div className="company-list">
                            <img src={car} alt="" className="company-pic" />
                            <h5 className="company-names">Доставка по Ташкенту</h5>
                        </div>
                        <div className="company-list">
                            <img src={check} alt="" className="company-pic" />
                            <h5 className="company-names">Гарантия качества</h5>
                        </div>
                        <div className="company-list">
                            <img src={center} alt="" className="company-pic" />
                            <h5 className="company-names">Служба поддержки 24/7</h5>
                        </div>
                    </div>
               </div>
           </div>

           <img src={sticky} alt="" className="headerinput-img" />
       </div>
    )
}
export default Category