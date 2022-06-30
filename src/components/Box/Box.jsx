import './Box.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Box = () =>{

    const [data, setData] = useState([])

    useEffect( async () => {

        fetch(`http://93.189.40.27:4500/products/?format=json`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

    const [dataProd, setdataProd] = useState(false)

    function loadWindow(item){
        setdataProd(true)
        window.location.reload(false)
        if(dataProd){
        }
    }

    return(
        <div id='topproduct'  className="box">
            <div className="container">
                <h1 className="box__name">ТОП ПРОДУКЦИИ</h1>
                <div  className="box-page">

                    {
                    data && data.map((e) => (
                        <div className="box-list" onClick={() => loadWindow()}>
                             <Link className='category-link' to={`/about${e.id}`}>
                                <div className="box-span">
                                    <h5 className="box-pero">PERO</h5>
                                    <h4 className="box-name">{e.name_ru}</h4>
                                 </div>
                                 <div className="box-yellow">
                                    <img src={e.image} alt="" className="category-picture" />
                                </div>
                             </Link>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Box