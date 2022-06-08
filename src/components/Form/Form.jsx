import './Form.css'
import * as React from 'react';
import { useState } from "react"
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Form = () =>{

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

    const {t} = useTranslation()



    //Modal

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


    return(
        <div id='form' className="form">
            <div className="container">
                <div className="form-page">
                    <h3 className="form-name">Для сотрудничества дополните форму</h3>

                    <form id="myForm" onSubmit={formBtn}  className="form-list">
                        <label className='form-label'>
                            <input name="name" id="name" type="text"  placeholder={t(18)} className=" form-input" />
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
                        <textarea placeholder={t(19)} id="textarea"
                            name="textarea" className="form-text" />
                        <span className="info-errors" id='errorInfo'>
                            Siz xabar kiritmadingiz
                        </span>
                        <button onClick={openModal} id="btnSubmit" type='submit' className="form-btn">{t(20)}</button>
                    </form>
                </div>
            </div>

            <Modal 
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button className='form-button' onClick={closeModal}>&times;</button>
                   <h3 className='form-names'>Murojaatingiz uchun tashakkur 😊</h3>
                   <p className="form-texts">Biz o’zimiz siz bilan tez muddatda bog’lanamiz, lekin shoshilnch desangiz shu raqamga qo’ng’iroq qilsangiz ham bo’ladi +9989900000000</p>

                   <div className="form-title">
                       <button className="form-done">Done</button>
                   </div>
            </Modal>
        </div>
    )
}
export default Form