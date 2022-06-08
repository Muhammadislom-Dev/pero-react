import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './HeaderInput.css'
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import sticky from '../../Assets/img/Sticky.png'

const HeaderInput = () =>{
    return(
        <div className="headerinput">
            <div className="container">
            <Navbar />
            <Header />
            </div>
            {/* <Box /> */}
            <Bounce top>
                <img src={sticky} alt="" className="headerinput-img" />
            </Bounce>
        </div>
    )
}
export default HeaderInput