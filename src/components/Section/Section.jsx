import './Section.css'
import { Link } from 'react-router-dom'
import pero from '../../Assets/img/milks.png'
import mwhite from '../../Assets/img/mwhite.png'
import pero2 from '../../Assets/img/pero2.png'
import pero1 from '../../Assets/img/pero1.png'
import pero3 from '../../Assets/img/peros.svg'
import { useState } from 'react'
import icon from '../../Assets/img/strelka.png'

const Section = () =>{

    const [dataProd, setdataProd] = useState(false)

    function loadWindow(item){
        setdataProd(true)
        window.location.reload(false)
        if(dataProd){
        }
    }

    return(
        <div id='product' className="section">
            <div className="container">
                <h1 className="section__name">ПРОДУКЦИИ</h1>
                <div className="section-page">
                    <div className="section-list">
                        <div className="section-circle">
                            <img src={pero} alt="" className="section-imgs" />
                        </div>
                        <div className='section-title'>
                            <h3 className="section-name">Бумажные продукции</h3>
                            <div onClick={() => loadWindow()}><Link  to="/category"  className="section-link">Посмотреть всё <img src={icon} alt="" className="section-icon" /> </Link></div>
                        </div>
                        
                    </div>

                    <div className="section-list">
                        <div className="section-circle">
                            <img src={pero1} alt="" className="section-img" />
                        </div>
                        <div className='section-title'>
                            <h3 className="section-name">Бумажные продукции</h3>
                            <div onClick={() => loadWindow()}><Link  to="/category"  className="section-link">Посмотреть всё <img src={icon} alt="" className="section-icon" /> </Link></div>
                        </div>
                    </div>

                    <div className="section-list">
                        <div className="section-circle">
                            <img src={pero2} alt="" className="section-pic" />
                        </div>
                        <div className='section-title'>
                            <h3 className="section-name">Бумажные продукции</h3>
                            <div onClick={() => loadWindow()}><Link  to="/category"  className="section-link">Посмотреть всё <img src={icon} alt="" className="section-icon" /> </Link></div>
                        </div>
                    </div>

                    <div className="section-list">
                        <div className="section-circle">
                            <img src={pero3} alt="" className="section-pero" />
                        </div>
                        <div className='section-title'>
                            <h3 className="section-name">Бумажные продукции</h3>
                            <div onClick={() => loadWindow()}><Link  to="/category"  className="section-link">Посмотреть всё <img src={icon} alt="" className="section-icon" /> </Link></div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={mwhite} alt="" className="section-white" />
        </div>
    )
}
export default Section