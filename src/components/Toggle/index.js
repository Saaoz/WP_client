import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.js';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';




const Toggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="toggle" style={{display: "flex", alignItems: "center"}}>
            <FontAwesomeIcon icon={faSun} style={{color: "#ffffff", margin: "1rem"}} />
            <label className="switch">
                <input
                    type="checkbox"
                    id="toggle-checkbox"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <span className="slider round"></span>
            </label>
            <FontAwesomeIcon icon={faMoon} style={{color: "#ffffff", margin: "1rem"}} />
        </div>
    );
};

export default Toggle;
