import './Content.css'

import google from '../../Assets/img/google.png'
import microsoft from '../../Assets/img/Microsoft.png'
import amazon from '../../Assets/img/amazon.png'
import slack from '../../Assets/img/slack.png'
import dropbox from '../../Assets/img/Dropbox.png'

const Content = () =>{
    return(
        <div className="content">
            <div className="container">
                <ul className="content-list">
                    <li className="content-item">
                        <img src={google} alt="" className="content-img" />
                    </li>
                    <li className="content-item">
                        <img src={slack} alt="" className="content-img" />
                    </li>
                    <li className="content-item">
                        <img src={amazon} alt="" className="content-img" />
                    </li>
                    <li className="content-item">
                        <img src={dropbox} alt="" className="content-img" />
                    </li>
                    <li className="content-item">
                        <img src={microsoft} alt="" className="content-img" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Content