import './index.css';


const Button = ({className, value, onClick, statusBtn}) => {



    return (
        <button className={className} onClick={onClick} disabled={statusBtn}>{value}</button>
    );
};

export default Button;