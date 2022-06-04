import './Header.css'
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

import icon from '../../Assets/img/Icon.png'
import vector from '../../Assets/img/Vector.png'
import guarantee from '../../Assets/img/guarantee.png'
import lock from '../../Assets/img/lock.png'
import milk from '../../Assets/img/milk.png'

import mgreen from '../../Assets/img/mgreen.png'
import mgren from '../../Assets/img/mgren.png'

import Vector from '../../SVG/Vector'
import Lock from '../../SVG/Lock'
import Check from '../../SVG/Check'





class Header extends Component{

    handleClick(lang) {
        i18next.changeLanguage(lang)
      }
      
      render() {
        const { t } = this.props;

    return(
        <div id='home' className="header">
            <div className="container">
                <div className="header-page">
                    <div className="header-left">
                        <h2 className="header-name">{t('Thanks.1')}   <br />  <span className="header-names">{t('Why.1')}</span></h2>
                        <a href="#" className="header-link">Посмотреть всё <img src={icon} alt="" className="header-icon" /> </a>
                          
                        <ul className="header-list">
                            <li className="header-item">
                                <button className="header-span">
                                    <Vector />
                                    {/* <img src={vector} alt="" className="header-img" /> */}
                                </button>
                                <p className="header-text">Плотность и мягкость</p>
                            </li>
                            <li className="header-item">
                                <button className="header-span">
                                    <Check />
                                    {/* <img src={guarantee} alt="" className="header-imgs" /> */}
                                </button>
                                <p className="header-text">Гарантия высокого качества</p>
                            </li>
                            <li className="header-item">
                                <button className="header-span">
                                    <Lock className="header-img" />
                                    {/* <img src={lock} alt="" className="header-img" /> */}
                                </button>
                                <p className="header-text">Безопасность продукта</p>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="header-circle">
                            <img src={milk} alt="" className="header-pictures" />
                        </div>
                        <ul className="header-title">
                            <li className="header-items">
                                <button onClick={() => this.handleClick('uz')} className="header-btn">UZ</button>
                            </li>
                            <li className="header-items">
                                <button onClick={() => this.handleClick('ru')} className="header-btn">RU</button>
                            </li>
                            <li className="header-items">
                                <button onClick={() => this.handleClick('en')} className="header-btn">EN</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <img src={mgreen} alt="" className="header-green" />
            <img src={mgren} alt="" className="header-gren" />
        </div>
    )
}
}
export default withTranslation()(Header)