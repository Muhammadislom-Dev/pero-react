import './Home.css'

import Company from '../../components/Company/Company'
import Box from '../../components/Box/Box'

const Home = ({name, img, description}) =>{
    return(
        <div className="home">
            <Box  img={img} name={name} description={description} />
            <Company />
        </div>
    )
}
export default Home