import './Rating.css'

import Fade from 'react-reveal/Fade';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const Rating = () =>{

    const {t} = useTranslation()

    return(
        <div className="rating">
            <div className="container">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="2000"
                    className="rating-page">
                    <div className="rating-list">
                        <p className="rating-number"><Fade top big cascade>21</Fade></p>
                        <p className="rating-text">Лет мы на рынке Узбекистана</p>
                    </div>
                    <div className="rating-list">
                        <p className='rating-number'><Fade top big cascade>200+</Fade></p>
                        <p className="rating-text">Более продуктов на рынке</p>
                    </div>
                    <div className="rating-list">
                        <p className="rating-number"><Fade bottom big cascade>15000+</Fade></p>
                        <p className="rating-text">{t(15)}</p>
                    </div>
                    <div className="rating-list rating-lists">
                        <p className="rating-number"><Fade bottom big  cascade>5+</Fade></p>
                        <p className="rating-texts">Более стран с которыми мы сотрудничаем</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rating