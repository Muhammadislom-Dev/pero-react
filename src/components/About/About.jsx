import './About.css'
import i18next from 'i18next';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import milk from '../../Assets/img/milkk.png'
import Navbar from '../Navbar/Navbar'
import mgreen from '../../Assets/img/mgreen.png'
import pero2 from '../../Assets/img/pero2.png'
import mgren from '../../Assets/img/mgren.png'
import sticky from '../../Assets/img/Sticky.png'
import times from '../../Assets/img/x.png'
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import Modals from '../Modal/Modal';
import { useTranslation } from 'react-i18next';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#FFFFFF;',
    },
  };

const About = ({name, img, description, change1, change2, change3}) => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }


    //Bot message

    const [greatModal, setGreatModal] =  useState(false);

    function openGreatModal(){
        setGreatModal(!greatModal)
    }  
    
    const formBtn = (e)=>{
 
        e.preventDefault();
            if (e.target[0].value.length > 0
                 && e.target[1].value.length > 0 && e.target[2].value.length > 0
                   ) {
    
                let botMessege = `
                     Assalomu allaykum, Sizga Yangi Xabar!😊%0A
                     Ismi 👤: ${e.target[0].value}%0A
                     Raqam ☎: ${e.target[1].value}%0A 
                     Xabar ✏️ ${e.target[2].value}%0A              
                `;

                let url =`https://api.telegram.org/bot5136951868:AAEbk5iaJ1l89mI2H7LXacKLS3ZcMbLHkAE/sendMessage?chat_id=-1001328953154&text=${botMessege}`;

                async function fetchAsync(url) {
                    let response = await fetch(url);
                    let data = await response.json();

                    return data;
                   
                }
                fetchAsync(url);

                if(document.querySelector("#name").matches(".input-error")){
                    document.querySelector("#name").classList.remove("input-error")
                    
                    document.querySelector("#errorText").classList.remove("error-text1")
                }
                if(document.querySelector("#tel").matches(".tel-error")){
                    document.querySelector("#tel").classList.remove("tel-error")
                     document.querySelector("#errorTel").classList.remove("error-tel1")
                }
             
                if(document.querySelector("#textarea").matches(".error-info")){
                    document.querySelector("#textarea").classList.remove("error-info")
                    document.querySelector("#errorInfo").classList.remove("error-info1")
                }

    
                e.target[0].value=""
                
           
                e.target[1].value=""       
                
                e.target[2].value=""   
                  
                openGreatModal()
                
        } 
        else{
            if(e.target[0].value.length < 1 ){
                
                document.querySelector("#name").classList.add("input-error")
               document.querySelector("#errorText").classList.add("error-text1")
            }
            if(e.target[1].value.length < 1){
                document.querySelector("#tel").classList.add("tel-error")
                document.querySelector("#errorTel").classList.add("error-tel1")
            } 
            if(e.target[2].value.length < 1){
                document.querySelector("#textarea").classList.add("error-info")
                document.querySelector("#errorInfo").classList.add("error-info1")
            }   
        }
      
    }


    const [data, setData] = useState([])

    useEffect( async () => {

        fetch(`http://93.189.40.27:4500/products/?format=json`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])
    console.log(data);

    function loadWindow(item){
        window.location.reload(false)
    }


    return(
        <div className="aboutpage">
            <Navbar />
            <div className="about">
            <div className="container">
                <div className="about-page">
                    <Fade left>
                        <div className="about-left">
                            <img src={img} alt="" className="about-img" />
                        </div>
                    </Fade>
                      <Fade right>
                            <div className="about-right">
                                <div>
                                    <h2 className="about-name">{name}</h2>
                                    <div>
                                        <p className='about-text'>{description}</p>
                                        <button onClick={openModal} className="about-btn">Buy Now</button>
                                    </div>
                                </div>
                                <ul className="header-title">
                                    <li className="header-items">
                                        <button onClick={() => change3(true)} className="header-btn">UZ</button>
                                    </li>
                                    <li className="header-items">
                                        <button onClick={() => change1(true)} className="header-btn">RU</button>
                                    </li>
                                    <li className="header-items">
                                        <button onClick={() => change2(true)} className="header-btn">EN</button>
                                    </li>
                                </ul>
                            </div>
                      </Fade>
                </div>
            </div>
            <Rotate bottom right>
                <img src={mgreen} alt="" className="header-greens" />
            </Rotate>
                
            <Rotate bottom left>
                <img src={mgren} alt="" className="about-gren" />
            </Rotate>
            </div>

            <div className="about-box">
                <div className="container">
                    <h2 className="about-names">Other production</h2>
                      <Fade bottom>
                        <div className="about__page">
                            {
                                data && data.map((e) => (
                                    <div className="category-list">
                                        <Link className='category-link' to={`/about${e.id}`} >
                                            <div className="category-span">
                                                <h5 className="category-pero">PERO</h5>
                                                <h4 className="category-name">{e.name}</h4>
                                            </div>
                                            <div className="category-yellow">
                                                <img src={e.image} alt="" className="category-pics" />
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                      </Fade>
                    <div onClick={() => loadWindow()} className="about-buttons">
                        <Link to="/" className="about-button">Back</Link>
                    </div>
                </div>
            </div>

            <Bounce top>
                <img src={sticky} alt="" className="headerinput-img" />
            </Bounce>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button className='about-times' onClick={closeModal}><img src={times} alt="" /></button>
                <h3 className="form-name">Для сотрудничества дополните форму</h3>

                <form id="myForm" onSubmit={formBtn}  className="form-list">
                    <label className='form-label'>
                        <input name="name" id="name" type="text"  placeholder="Ismingizni kiriting" className=" form-input" />
                        <p className="error-text" id='errorText'>
                            Siz ismingizni kiritmadingiz
                        </p>
                    </label>
                    <label className='form-label'>
                            <input name="tel" id="tel" type="tel"  placeholder="+998" className=" form-input" />
                            <p className="tel-errors" id='errorTel'>
                                Siz telefon raqamingizni kiritmadingiz
                            </p>
                    </label>
                    <textarea placeholder="Xabar" id="textarea"
                        name="textarea" className="form-text" />
                    <span className="info-errors" id='errorInfo'>
                        Siz xabar kiritmadingiz
                    </span>
                    <button id="btnSubmit" type='submit' className="form-btn">Отправитъ</button>
                </form>
            </Modal>



            
            <Modals show={greatModal} className="modal-content"
                contentLabel="Example Modal">
                <Link to="/" className='form-buttons' onClick={()=>setGreatModal()}>&times;</Link>
                   <h3 className='form-names'>Murojaatingiz uchun tashakkur 😊</h3>
                   <div className="form-titles">
                        <Link to="/" onClick={()=>setGreatModal()} className="form-dones">Done</Link>
                   </div>
            </Modals>
        </div>
    )
}
export default About