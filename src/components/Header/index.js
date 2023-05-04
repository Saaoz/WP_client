import './index.css';
import Logo from '../Logo';

const Header = () => {
    return (
        <div className="header">
            <nav>
                {/* <p className='connexion-status'>Login</p> */}
                <Logo />
                <p className='connexion-status'>Login</p>

            </nav>
        </div>
    );
};

export default Header;