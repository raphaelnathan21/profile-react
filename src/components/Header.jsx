import img1 from '../img/img1.png';
const Header = (props) => {
    return (
        <>
             <header className='styleHeader'>
                <img src={img1} />
                <h2>{props.titulo}</h2>
            </header>
        </>
    )
}

export default Header;