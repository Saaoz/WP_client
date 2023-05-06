import './index.css';
import Logo from '../Logo';
import Toggle from '../Toggle';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.js';



const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div className="header">
            <nav>
                <div className='links'>
                    {/* <p className='connexion-status'>Login</p> */}
                    <Logo />
                    
                    <Link to="/" className='connexion-status' >
                        <p className='connexion-status'>Login</p>
                    </Link>
                    <Link to="/createworkmanager" className='createworkmanager'>
                        <p className='connexion-status'>nouveau conduct.</p>
                    </Link>
                </div>
                <Toggle toggleTheme={toggleTheme} />
            </nav>
        </div>
    );
};

export default Header;