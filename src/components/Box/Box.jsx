import './Box.css'

import pero from '../../Assets/img/salfetka.png'
import pero1 from '../../Assets/img/pero1.png'
import pero2 from '../../Assets/img/pero2.png'
import pero3 from '../../Assets/img/peros.png'

const Box = () =>{
    return(
        <div className="box">
            <div className="container">
                <div className="box-page">
                    <div className="box-list">
                        <div className="box-span">
                            <h5 className="box-pero">PERO</h5>
                            <h4 className="box-name">Влажные салфетки</h4>
                        </div>
                        <div className="box-yellow">
                            <img src={pero} alt="" className="box-img" />
                        </div>
                    </div>

                    <div className="box-lists">
                        <div className="box-span">
                            <h5 className="box-pero">PERO</h5>
                            <h4 className="box-name">Влажные салфетки</h4>
                        </div>

                        <div className="box-green">
                            <img src={pero1} alt="" className="box-picture" />
                        </div>
                    </div>

                    <div className="box-circle">
                        <div className="box-span">
                            <h5 className="box-pero">PERO</h5>
                            <h4 className="box-name">Влажные салфетки</h4> 
                        </div>
                        <div className="box-orange">
                            <img src={pero2} alt="" className="box-pics" />
                        </div>
                    </div>

                    <div className="box-right">
                        <div className="box-span">
                            <h5 className="box-pero">PERO</h5>
                            <h4 className="box-name">Влажные салфетки</h4>
                        </div>

                        <div className="box-yellows">
                            <img src={pero3} alt="" className="box-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Box