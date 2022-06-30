import './Footer.css'
import { useTranslation } from 'react-i18next';

import pero from '../../Assets/img/Frame.png'
import abbacoding from '../../Assets/img/abbacoding.png'
import abbamedia from '../../Assets/img/abbamedia.png'

const Footer = () =>{

    const {t} = useTranslation()


    return(
        <>
         <div className="footer">
            <div className="container">
                <div className="footer-page">
                    <div className="footer-list">
                        <img src={pero} alt="" className="footer-img" />
                        <p className="footer-text">{t('pero')}</p>

                        <ul className="footer-title">
                            <li className="footer-items">
                                <a href="#" className="footer-links">
                                    <i className="fa fa-facebook footer-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="footer-items">
                                <a href="#" className="footer-links">
                                    <i className="fa fa-twitter footer-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="footer-items">
                                <a href="#" className="footer-links">
                                    <i className="fa fa-instagram footer-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="footer-list">
                        <li className="footer-item">
                            <h3 className="footer-name">{t('company')}</h3>
                        </li>
                       <li className="footer-item"> 
                            <a href="#" className="footer-link">{t('aboutuss')}</a>
                       </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Contact Us</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">{t('support')}</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">{t('newsblog')}</a>
                        </li>
                    </ul>

                    <ul className="footer-list footer__list">
                        <li className="footer-item">
                            <h3 className="footer-name">Terms</h3>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">{t('peivacy')}</a>
                        </li>
                        <li className="footer-item">
                        <a href="#" className="footer-link">{t('termsuasge')}</a>
                        </li>
                       <li className="footer-item">
                            <a href="#" className="footer-link">Areas Of</a>
                       </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Coverage</a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li className="footer-item">
                            <h3 className="footer-name">Contact</h3>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">84/E/2 West</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Jafrabad, Liverpool</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Uk</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">+8801757410</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">907</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-boxs">
                    <div>
                      <a href="#"><img src={abbacoding} alt="" className="footer-abba" /></a>
                      <a href="#"><img src={abbamedia} alt="" className="footer-abba" /></a>
                    </div>
                    <div>
                        <a href="#"><img src={abbacoding} alt="" className="footer-abba" /></a>
                        <a href="#"><img src={abbamedia} alt="" className="footer-abba" /></a>
                    </div>
                </div>
            </div>
        </div>
            <div className="footer-box">
                <div className="container">
                    <h4 className='footer-names'>Copyright PERO | Designed by <span className='footer-span'>abba marketing</span>   -Powered by <span className='footer-span'>ABBA</span></h4>
                </div>
            </div>
        </>
    )
}
export default Footer