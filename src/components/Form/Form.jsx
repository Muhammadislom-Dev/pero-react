import './Form.css'
import * as React from 'react';
import { useState } from "react"
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal';


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
                     Raqam ☎: ${e.target[2].value}%0A 
                     Xabar ✏️ ${e.target[1].value}%0A              
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

    return(
        <div id='form' className="form">
            <div className="container">
                <h1 className="form__name">Контакты</h1>
                <div className="form-page">
                    <h3 className="form-name">Для сотрудничества дополните форму</h3>

                    <form id="myForm" onSubmit={formBtn}  className="form-list">
                        <label className='form-label'>
                            <input name="name" id="name" type="text"  placeholder={t('ism')} className=" form-input" />
                            <p className="error-text" id='errorText'>
                                Siz ismingizni kiritmadingiz
                            </p>
                        </label>
                       <label className='form-label'>
                            <input id="tel" type="number" name='tel'  placeholder="+998" className=" form-input" />
                            <p className="tel-errors" id='errorTel'>
                                Siz telefon raqamingizni kiritmadingiz
                            </p>
                       </label>
                        <textarea placeholder={t('xabar')} id="textarea"
                            name="textarea" className="form-text" />
                        <span className="info-errors" id='errorInfo'>
                            Siz xabar kiritmadingiz
                        </span>
                        <button  id="btnSubmit" type='submit' className="form-btn">{t('yuborish')}</button>
                    </form>
                </div>
            </div>

            <Modal show={greatModal} className="modal-content"
                contentLabel="Example Modal">
                <button className='form-button' onClick={()=>setGreatModal()}>&times;</button>
                   <h3 className='form-names'>Murojaatingiz uchun tashakkur 😊</h3>
                   <div className="form-title">
                       <button onClick={()=>setGreatModal()} className="form-done">Done</button>
                   </div>
            </Modal>
        </div>
    )
}
export default Form