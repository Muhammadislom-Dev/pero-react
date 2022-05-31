import './Form.css'

const Form = () =>{
    return(
        <div className="form">
            <div className="container">
                <div className="form-page">
                    <h3 className="form-name">Для сотрудничества дополните форму</h3>

                    <form  className="form-list">
                        <input required type="text" placeholder='Ismingiz' className="form-input" />
                        <input required type="text" placeholder='Telefon raqamingiz' className='form-input' />
                        <textarea required placeholder='Xabar' className='form-text'></textarea>
                        <button className="form-btn">Отправитъ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form