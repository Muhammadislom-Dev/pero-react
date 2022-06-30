import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './HeaderInput.css'
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import sticky from '../../Assets/img/Sticky.png'

const HeaderInput = ({change1, change2, change3, uzbek, russian, english}) =>{
    return(
        <div className="headerinput">
            <div className="container">
            <Navbar />
            <Header change1={change1} change2={change2} change3={change3} uzbek={uzbek} russian={russian} english={english} />
            </div>
            {/* <Box /> */}
            <Bounce top>
                <img src={sticky} alt="" className="headerinput-img" />
            </Bounce>
        </div>
    )
}
export default HeaderInput