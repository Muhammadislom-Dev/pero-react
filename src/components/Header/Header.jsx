import './Header.css'
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import icon from '../../Assets/img/Icon.png'
import milk from '../../Assets/img/milk.png'
import { Link } from 'react-router-dom';
import mgreen from '../../Assets/img/mgreen.png'
import mgren from '../../Assets/img/mgren.png'
import Vector from '../../SVG/Vector'
import Lock from '../../SVG/Lock'
import Check from '../../SVG/Check'
import Rotate from 'react-reveal/Rotate';




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
                            <Link to="/category" className="header-link">Посмотреть всё <img src={icon} alt="" className="header-icon" /> </Link>
                            
                            <ul className="header-list">
                                <li className="header-item">
                                    <button className="header-span">
                                        <Vector />
                                    </button>
                                    <p className="header-text">Плотность и мягкость</p>
                                </li>
                                <li className="header-item">
                                    <button className="header-span">
                                        <Check />
                                    </button>
                                    <p className="header-text">{t(7)}</p>
                                </li>
                                <li className="header-item">
                                    <button className="header-span">
                                        <Lock className="header-img" />
                                    </button>
                                    <p className="header-text">{t(8)}</p>
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

            
            <Rotate bottom right>
                <img src={mgreen} alt="" className="header-green" />
            </Rotate>
            
            <Rotate bottom left>
                <img src={mgren} alt="" className="header-gren" />
            </Rotate>
        </div>
    )
}
}
export default withTranslation()(Header)