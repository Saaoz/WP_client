import './index.css';

const Input = ({placeholder, type, id, onChange, value} ) => {

        return (
        <div className='input-container'>
                <input 
                        id={id}
                        className='input'
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                />
        </div>
        );
};

export default Input;