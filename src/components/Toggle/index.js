import './index.css';

const Toggle = () => {
    return (
        <div className="toggle">
            <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Toggle;