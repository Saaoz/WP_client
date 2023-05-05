import './index.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                {/* <p className='connexion-status'>Login</p> */}
                <Logo />
                <p className='connexion-status'>Login</p>
                <Link to="/createworkmanager" className='createworkmanager'>
                <p className='connexion-status'>create Workmanager</p>
                </Link>

            </nav>
        </div>
    );
};

export default Header;