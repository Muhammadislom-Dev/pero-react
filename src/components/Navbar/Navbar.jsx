import React from 'react'
import './Navbar.css'

import pero from '../../Assets/img/pero.png'
import call from '../../Assets/img/call.png'
import toggle from '../../Assets/img/toggle.png'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-page">
                    <div className="navbar-box">
                        <img src={pero} alt="" className="navbar-img" />
                        <div className="navbar-titles">
                            <img src={toggle} alt="" className="navbar-logo" />
                            <p className="navbar-name">Наша продукция</p>
                        </div>
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Гдавная</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link"> О Компании</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">НoReCa</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Tissue</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Контакты</a>
                        </li>
                    </ul>
                    <div className="navbar-title">
                        <img src={call} alt="" className="navbar-logos" />
                        <a href="+998911770077" className="navbar-phone">(91) 177 00 77</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar