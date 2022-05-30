import './Section.css'

import salfetka from '../../Assets/img/salfetka.png'
import salfetka2 from '../../Assets/img/salfetka2.png'
import salfetka1 from '../../Assets/img/salfetka1.png'
import salfetka3 from '../../Assets/img/salfetka3.png'

const Section = () =>{
    return(
        <div className="section">
            <div className="container">
                <div className="section-page">
                    <ul className="section-list section-lists">
                        <li className="section-item">
                            <img src={salfetka} alt="" className="section-img" />
                        </li>
                        <li className="section-item">
                            <p className="section-name">Влажные салфетки</p>
                        </li>
                    </ul>
                    <ul className="section-list section-titles">
                        <li className="section-item">
                            <img src={salfetka2} alt="" className="section-img" />
                        </li>
                        <li className="section-item">
                            <p className="section-name">Бумажные cалфетки</p>
                        </li>
                    </ul>
                    <ul className="section-list">
                        <li className="section-item">
                            <img src={salfetka1} alt="" className="section-img" />
                        </li>
                        <li className="section-item">
                            <p className="section-name">Универсальные салфетки</p>
                        </li>
                    </ul>
                    <ul className="section-list section-title">
                        <li className="section-item">
                            <img src={salfetka3} alt="" className="section-img" />
                        </li>
                        <li className="section-item">
                            <p className="section-name">Влажные салфетки</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Section