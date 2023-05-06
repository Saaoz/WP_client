import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext.js';
import './index.css';




const Toggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="toggle">
            <label className="switch">
                <input
                    type="checkbox"
                    id="toggle-checkbox"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Toggle;
