import './index.css';

const Input = ({ placeholder, type, id, onChange, value, maxlength }) => {

        return (

        <div className='input-container'>
                <input
                        id={id}
                        className='input'
                        type={type ? type : 'text'}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        maxLength={maxlength ? maxlength : null}
                />
        </div>
        );
};

export default Input;