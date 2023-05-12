import './index.css';

const Input = ({ placeholder, type, id, onChange, value, maxlength, className,inputStatus, min, max}) => {

        return (

        <div className='input-container'>
                <input
                        id={id}
                        className={className ? className : 'input'}
                        type={type ? type : 'text'}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        maxLength={maxlength ? maxlength : null}
                        disabled={inputStatus ? true : false}
                        min={min? min : null}
                        max={max? max : null}
                />
        </div>
        );
};

export default Input;