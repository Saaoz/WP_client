import './index.css';
import logo from '../../sources/imgs/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <div className="logo">
            <Link to="/" className='Home'>
            <img src={logo} alt='logo site'></img>
            </Link>
        </div>
    );
};

export default Logo;