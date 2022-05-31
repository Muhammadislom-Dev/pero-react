import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './HeaderInput.css'

import sticky from '../../Assets/img/Sticky.png'
import Box from '../../components/Box/Box'

const HeaderInput = () =>{
    return(
        <div className="headerinput">
            <Navbar />
            <Header />
            <Box />
            <img src={sticky} alt="" className="headerinput-img" />
        </div>
    )
}
export default HeaderInput