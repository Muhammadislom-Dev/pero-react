import './Company.css'

import factory from '../../Assets/img/factory.png'
import download from '../../Assets/img/download.png'
import arrow from '../../Assets/img/arrow.png'
import car from '../../Assets/img/car.png'
import check from '../../Assets/img/check.png'
import center from '../../Assets/img/callcenter.png'

const Company = () =>{
    return(
        <div className="company">
            <div className="container">
                <div className="company-page">
                    <div className="company-left">
                        <img src={factory} alt="" className="company-img" />
                    </div>

                    <div className="company-right">
                        <h3 className="company-name">О Компании</h3>
                        <p className="company-text">ООО International Paper является крупнейшим производителем бумажных изделий санитарно-гигиенического назначения. Наша компания ведёт свою деятельность с 2000 года под брендом ELMA.</p>

                        <p className="company-text">Наш товар производится из высококачественного сырья и продается не только в Узбекистане, но и в таких странах, как: Азербайджан, Казахстан, Туркменистан, Таджикистан и Киргизия. Это доказывает, что наш продукт высокого качества и соответствует международным стандартам.</p>

                        <div className="company-title">
                            <button className="company-button">
                                <img src={arrow} alt="" className="company-imgs" />
                                 Подробнее
                            </button>
                            <button className="company-btn">
                                <img src={download} alt="" className="company-icon" />
                                Скачать каталог
                            </button>
                        </div>
                    </div>
                </div>

                <div className="company-box">
                    <ul className="company-lists">
                        <li className="company-items company-titles">
                            <div className="company-circle">
                                <img src={car} alt="" className="company-pic" />
                            </div>
                        </li>
                        <li className="company-items">
                            <p className="company-surname">Доставка по Ташкенту</p>
                        </li>
                    </ul>
                    <ul className="company-lists">
                        <li className="company-items company-titles">
                            <div className="company-circle">
                                <img src={check} alt="" className="company-pic" />
                            </div>
                        </li>
                        <li className="company-items">
                            <p className="company-surname">Гарантия качества</p>
                        </li>
                    </ul>
                    <ul className="company-lists">
                        <li className="company-items company-titles">
                            <div className="company-circle">
                                <img src={center} alt="" className="company-pic" />
                            </div>
                        </li>
                        <li className="company-items">
                            <p className="company-surname">Служба поддержки 24/7</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Company