import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import pero from '../../Assets/img/pero.png'
import call from '../../Assets/img/mp3.png'
import Toogle from '../../SVG/Toogle'
import button from '../../Assets/img/btn.jpg'
import Modal from 'react-modal';
import remove from '../../Assets/img/cross.png'

const customStyles = {
  content: {
    top: '57%',
    left: '100%',
    right: '0%',
    bottom: 'auto',
    marginRight: '-87%',
    height: '115vh',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f2f2f2'
  },
};





const Navbar = () =>{

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
<div className="navbar">
    <div className="container navbar--container">
        <div className="navbar-page">
            <div className="navbar-box">
                <Link to="/">
                    <img src={pero} alt="" className="navbar-img" />
                </Link>

                <a href="#product" className="navbar-titles">
                    <Toogle />
                    Наша продукция
                </a>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#home" className="navbar-link">Главная</a>
                </li>
                <li className="navbar-item">
                    <a  href="#company" className="navbar-link"> О Компании</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">НoReCa</a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">Tissue</a>
                </li>
                <li className="navbar-item">
                    <a href="#form" className="navbar-link">Контакты</a>
                </li>
            </ul>
            <div className="navbar-title">
                <img src={call} alt="" className="navbar-logos" />
                <Link href="+998911770077" className="navbar-phone">(91) 177 00 77</Link>
            </div>
            <button onClick={openModal}
            className="navbar-btn"><img src={button} alt="" className="navbar-button" /></button>
        </div>
    </div>

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className='modal-btn' onClick={closeModal}>
         <img src={remove} alt="" className="modal-remove" />
        </button>
        <ul className="modal-list">
            <li className="modal-item">
                <a href="#home" className="modal-link">Главная</a>
            </li>
            <li className="modal-item">
                <a href="#company" className="modal-link">О Компании</a>
            </li>
            <li className="modal-item">
                <a href="#" className="modal-link">НoReCa</a>
            </li>
            <li className="modal-item">
                <a href="#" className="modal-link">Tissue</a>
            </li>
            <li className="modal-item">
                <a href="#form" className="modal-link">Контакты</a>
            </li>
            <li className='modal-item modal-items'>
                <img src={call} alt="" className="navbar-logos" />
                <Link href="+998911770077" className="modal-phone">(91) 177 00 77</Link>
            </li>
            <li className="modal-item">
                <a href="#product" className="modal-titles">
                    {/* <img src={toggle} alt="" className="" /> */}
                    <Toogle />
                    Наша продукция
                </a>
            </li>
        </ul>
      </Modal>
</div>
)
}

export default Navbar