import './Home.css'
import img1 from '../../img/img1.png';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div>
                    <h1>Oi, me chamo <span>Nathan!</span></h1>
                    <h3>Sou desenvolvedor Full Stack</h3>
                </div>
                <div>
                    <img src={img1} alto={img1} className='sLogo'/>
                </div>

            </div>

            <div className='menu'>
                <a>Sobre mim</a>
                <a>Meus Projetos</a>
            </div>
        </>
    )
}

export default Home;