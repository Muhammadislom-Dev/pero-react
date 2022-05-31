import './Rating.css'

const Rating = () =>{
    return(
        <div className="rating">
            <div className="container">
                <div className="rating-page">
                    <div className="rating-list">
                        <p className="rating-number">21</p>
                        <p className="rating-text">Лет мы на рынке Узбекистана</p>
                    </div>
                    <div className="rating-list">
                        <p className="rating-number">200+</p>
                        <p className="rating-text">Более продуктов на рынке</p>
                    </div>
                    <div className="rating-list">
                        <p className="rating-number">15000+</p>
                        <p className="rating-text">Магазинов продают наш продукт</p>
                    </div>
                    <div className="rating-list">
                        <p className="rating-number">5+</p>
                        <p className="rating-text">Более стран с которыми мы сотрудничаем</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rating