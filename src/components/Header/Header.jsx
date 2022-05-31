import './Header.css'

import icon from '../../Assets/img/Icon.png'
import vector from '../../Assets/img/Vector.png'
import guarantee from '../../Assets/img/guarantee.png'
import lock from '../../Assets/img/lock.png'
import milk from '../../Assets/img/milk.png'

const Header = () =>{
    return(
        <div className="header">
            <div className="container">
                <div className="header-page">
                    <div className="header-left">
                        <h2 className="header-name">Универсальные <span className="header-names">салфетки</span></h2>
                        <a href="#" className="header-link">Посмотреть всё <img src={icon} alt="" className="header-icon" /> </a>
                          
                        <ul className="header-list">
                            <li className="header-item">
                                <div className="header-span"><img src={vector} alt="" className="header-img" /></div>
                                <p className="header-text">Плотность и мягкость</p>
                            </li>
                            <li className="header-item">
                                <div className="header-span"><img src={guarantee} alt="" className="header-imgs" /></div>
                                <p className="header-text">Гарантия высокого качества</p>
                            </li>
                            <li className="header-item">
                                <div className="header-span"><img src={lock} alt="" className="header-img" /></div>
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