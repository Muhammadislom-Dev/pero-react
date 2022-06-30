import './Company.css'
import React from 'react';
import Fade from 'react-reveal/Fade';
import factory from '../../Assets/img/factory.png'
import car from '../../Assets/img/car.png'
import check from '../../Assets/img/check.png'
import center from '../../Assets/img/callcenter.png'
import { useTranslation } from 'react-i18next';

import Arrow from '../../SVG/Arrow'

const Company = () =>{

    const {t} = useTranslation()

    return(
        <div id='company' className="company">
            <div className="container">
                <h1 className="company__name">О НАС</h1>
                <div className="company-page">
                    <Fade left>
                        <div className="company-left">
                            <img src={factory} alt="" className="company-img" />
                        </div>
                    </Fade>

                   <Fade right>
                   <div className="company-right">
                        <h3 className="company-name">О Компании</h3>
                        <p className="company-text">{t('bizhaqimizda')}</p>

                        <div className="company-title">
                            <button className="company-button">
                                    <Arrow />
                                 Подробнее
                            </button>
                            <a download href='./amazon.png'  className="company-btn">
                                <i className="fa fa-download company-icon" aria-hidden="true"></i>
                                {t('skachat')}
                            </a>
                        </div>
                    </div>
                   </Fade>
                </div>

                <div className="company-box">
                    <div className="company-list">
                        <img src={car} alt="" className="company-pic" />
                        <h5 className="company-names">{t('delivery')}</h5>
                    </div>
                    <div className="company-list">
                        <img src={check} alt="" className="company-pic" />
                        <h5 className="company-names">{t('guarantee')}</h5>
                    </div>
                    <div className="company-list">
                        <img src={center} alt="" className="company-pic" />
                        <h5 className="company-names">{t('suppot')}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Company