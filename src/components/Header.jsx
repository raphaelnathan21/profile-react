import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

import img1 from '../img/img1.png';
const Header = (props) => {
    return (
        <>
             <header className='containerHeader'>
                <div className='styleHeader'>
                <img src={img1} />
                <h2>{props.titulo}</h2>
                </div>
                <Link to='/'>
                <FontAwesomeIcon icon={faHouse} />
                </Link>
            </header>
        </>
    )
}

export default Header;