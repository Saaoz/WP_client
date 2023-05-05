import './index.css';

const Input = ({ placeholder, type, id, onChange, value, maxlength }) => {

        return (
                <input
                        id={id}
                        className='input'
                        type={type ? type : 'text'}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        maxLength={maxlength ? maxlength : null}
                />
        );
};

export default Input;