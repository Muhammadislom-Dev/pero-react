import React from "react";
import './Header.css'


import icon from '../../Assets/img/Icon.png' 
import lock from '../../Assets/img/lock.png'
import feather from '../../Assets/img/feather.png'
import guarente from '../../Assets/img/guarantee.png'
import milk from '../../Assets/img/milk.png'

const Header = () =>{
    return(
        <div className="header">
            <div className="container">
                <div className="header-page">
                    <div className="header-left">
                        <h2 className="header-name">Универсальные <span className="header-names">салфетки</span></h2>
                        <a href="#" className="header-link">Посмотреть всё <img src={icon} className="header-icons" alt="" /> </a>

                        <ul className="header-list">
                            <li className="header-item">
                                <span className="header-title"><img src={feather} alt="" className="header-img" /></span>
                                <p className="header-text">Плотность и мягкость</p>
                            </li>
                            <li className="header-item">
                                <span className="header-title"><img src={guarente} alt="" className="header-img" /></span>
                                <p className="header-text">Гарантия высокого качества </p>
                            </li>
                            <li className="header-item">
                                <span className="header-title"><img src={lock} alt="" className="header-img" /></span>
                                <p className="header-text">Безопасность продукта</p>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="header-circle">
                            <img src={milk} alt="" className="header-milk" />
                        </div>

                        <ul className="header-lists">
                            <li className="header-items">
                                <button className="header-btn">UZ</button>
                            </li>
                            <li className="header-items">
                                <button className="header-btn">RU</button>
                            </li>
                            <li className="header-items">
                                <button className="header-btn">EN</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header