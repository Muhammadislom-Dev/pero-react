import Navbar from '../Navbar/Navbar'
import './Category.css'
import { Link } from 'react-router-dom'
import mgreen from '../../Assets/img/mgreen.png'
import mgren from '../../Assets/img/mgren.png'
import car from '../../Assets/img/car.png'
import check from '../../Assets/img/check.png'
import center from '../../Assets/img/callcenter.png'
import sticky from '../../Assets/img/Sticky.png'
import { Bounce } from 'react-reveal'
import { Rotate } from 'react-reveal'
import { useState } from 'react'
import { useEffect } from 'react'

const Category = () => {

    const [data, setData] = useState([])

    useEffect( async () => {

        fetch(`http://93.189.40.27:4500/products/?format=json`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])
    console.log(data);

    // const [dataProd, setdataProd] = useState(false)

    function loadWindow(item){
        window.location.reload(false)
    }


    // console.log(data);
    return(
       <div className="categorypage">
           <Navbar />
           <div className="category">
               <div className="container">
                        <div className="category-page">
                        {
                            data && data.map ((e) => (
                                <div className="category-list" onClick={() => loadWindow()} >
                                <Link className='category-link' to={`/about${e.id}`}>
                                    <div className="category-span">
                                        <h5 className="category-pero">PERO</h5>
                                        <h4 className="category-name">{e.name_ru}</h4>
                                    </div>
                                    <div className="category-yellow">
                                        <img src={e.image} alt="" className="category-picture" />
                                    </div>
                                </Link>
                            </div>
                            ))
                        }
                   </div>
               </div>

                <Rotate bottom right>
                    <img src={mgreen} alt="" className="header-greens" />
                </Rotate>
                <Rotate bottom left>
                    <img src={mgren} alt="" className="header-grens" />
                </Rotate>
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

           <Bounce top>
                <img src={sticky} alt="" className="headerinput-img" />
            </Bounce>
       </div>
    )
}
export default Category