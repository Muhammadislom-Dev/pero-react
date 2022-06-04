import './Company.css'
import React from 'react';
import Fade from 'react-reveal/Fade';
import factory from '../../Assets/img/factory.png'
import car from '../../Assets/img/car.png'
import check from '../../Assets/img/check.png'
import center from '../../Assets/img/callcenter.png'

import Arrow from '../../SVG/Arrow'

const Company = () =>{
    return(
        <div id='company' className="company">
            <div className="container">
                <div className="company-page">
                    <Fade left>
                        <div className="company-left">
                            <img src={factory} alt="" className="company-img" />
                        </div>
                    </Fade>

                   <Fade right>
                   <div className="company-right">
                        <h3 className="company-name">О Компании</h3>
                        <p className="company-text">ООО International Paper является крупнейшим производителем бумажных изделий санитарно-гигиенического назначения. Наша компания ведёт свою деятельность с 2000 года под брендом ELMA.</p>

                        <p className="company-text">Наш товар производится из высококачественного сырья и продается не только в Узбекистане, но и в таких странах, как: Азербайджан, Казахстан, Туркменистан, Таджикистан и Киргизия. Это доказывает, что наш продукт высокого качества и соответствует международным стандартам.</p>

                        <div className="company-title">
                            <button className="company-button">
                                    <Arrow />
                                 Подробнее
                            </button>
                            <button className="company-btn">
                                <i className="fa fa-download company-icon" aria-hidden="true"></i>
                                Скачать каталог
                            </button>
                        </div>
                    </div>
                   </Fade>
                </div>

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
    )
}
export default Company