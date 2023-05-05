import './index.css';

const Input = ({placeholder, type, id, onChange, value} ) => {

        return (
            <input 
                id={id}
                className='input'
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                />
        );
};

export default Input;