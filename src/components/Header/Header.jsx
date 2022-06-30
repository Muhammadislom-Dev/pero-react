import './Header.css'
import React, { Component, useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';
import icon from '../../Assets/img/Icon.png'
import milk from '../../Assets/img/milk.png'
import { Link, NavLink } from 'react-router-dom';
import mgreen from '../../Assets/img/mgreen.png'
import mgren from '../../Assets/img/mgren.png'
import Vector from '../../SVG/Vector'
import Lock from '../../SVG/Lock'
import Check from '../../SVG/Check'
import Rotate from 'react-reveal/Rotate';


const Header = ({change1, change2, change3, uzbek, russian, english}) => {
    
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
    
        const { t } = useTranslation();

        function loadWindow(item){
            // this.setState({count: true})
            window.location.reload(false)
            
        }

      

    return(
        <div id='home' className="header">
            <div className="container">
                    <div className="header-page">
                        <div className="header-left">
                            <h2 className="header-name"> Универсальные   <br />  <span className="header-names"> салфетки</span></h2>
                           <div   onClick={() =>  loadWindow()}>
                           <Link to='/category'  
                             className="header-link">Посмотреть всё  <img src={icon} alt="" className="header-icon" /> </Link>
                           </div>
                            
                            <ul className="header-list">
                                <li className="header-item">
                                    <button className="header-span">
                                        <Vector />
                                    </button>
                                    <p className="header-text">{t('1page')}</p>
                                </li>
                                <li className="header-item">
                                    <button className="header-span">
                                        <Check />
                                    </button>
                                    <p className="header-text">{t('1pge')}</p>
                                </li>
                                <li className="header-item">
                                    <button className="header-span">
                                        <Lock className="header-img" />
                                    </button>
                                    <p className="header-text">{t('1pg')}</p>
                                </li>
                            </ul>
                        </div>

                        <div className="header-right">
                            <div className="header-circle">
                                <img src={milk} alt="" className="header-pictures" />
                            </div>
                            <ul className="header-title">
                                <li className="header-items">
                                    <button onClick={() => change3(true)} className="header-btn">UZ</button>
                                </li>
                                <li className="header-items">
                                    <button onClick={() => change1(true)} className="header-btn">RU</button>
                                </li>
                                <li className="header-items">
                                    <button onClick={() => change2(true)} className="header-btn">EN</button>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>

            
            <Rotate bottom right>
                <img src={mgreen} alt="" className="header-green" />
            </Rotate>
            
            <Rotate bottom left>
                <img src={mgren} alt="" className="header-gren" />
            </Rotate>
        </div>
    )
}
export default Header