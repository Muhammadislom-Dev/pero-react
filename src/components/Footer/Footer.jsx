import './Footer.css'

import pero from '../../Assets/img/Frame.png'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-page">
                    <div className="footer-list">
                        <img src={pero} alt="" className="footer-img" />
                        <p className="footer-text">Quo is the most easier way for transaction with your friends and family, No matter where are you. An exceptional way for make your life one step easier.</p>

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
                            <h3 className="footer-name">Company</h3>
                        </li>
                       <li className="footer-item"> 
                            <a href="#" className="footer-link">About Us</a>
                       </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Contact Us</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Support</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">News/Blog</a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li className="footer-item">
                            <h3 className="footer-name">Terms</h3>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-link">Privacy Policy</a>
                        </li>
                        <li className="footer-item">
                        <a href="#" className="footer-link">Terms Of Usage</a>
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
                {/* <ul className="footer-title">
                    <li className="footer-items">
                        <i className="fa fa-facebook footer-icon" aria-hidden="true"></i>
                    </li>
                    <li className="footer-items">
                        <i className="fa fa-twitter footer-icon" aria-hidden="true"></i>
                    </li>
                    <li className="footer-items">
                        <i className="fa fa-instagram footer-icon" aria-hidden="true"></i>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}
export default Footer