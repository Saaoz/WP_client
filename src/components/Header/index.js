import './index.css';
import Logo from '../Logo';
import Toggle from '../Toggle';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.js';



const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
    var works_manager ="";

    if (sessionStorage.getItem('works_manager_firstname')) {
        works_manager = sessionStorage.getItem('works_manager_firstname');
    };

    function disconnect() {
        sessionStorage.clear();
        window.location.href = '/login';
    }


    return (
        <div className="header">
            <nav>
                <div className='links'>
                    {/* <p className='connexion-status'>Login</p> */}
                    <Logo />
                    
                    {/* <Link to="/" className='connexion-status' >
                        <p className='connexion-status'>Login</p>
                    </Link> */}
                    <Link to="/createworkmanager" className='createworkmanager'>
                        <p className='connexion-status'>nouveau conduct.</p>
                    </Link>
                </div>
                <div className="session">
                    <button className="disconnect" onClick={disconnect} title="Se déconnecter">{works_manager}</button>
                    {/* <a className="works_manager" href="/login" title="Se déconnecter">{works_manager}</a> */}
                    <Toggle toggleTheme={toggleTheme} />
                </div>
            </nav>
        </div>
    );
};

export default Header;