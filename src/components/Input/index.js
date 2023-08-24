import './index.css';
import { useRef } from 'react';

const Input = ({ placeholder, type, id, onChange, value, maxlength, className,inputStatus, min, max, step, tabIndex, ref}) => {

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
                        step={step? step : null}
                        tabIndex={tabIndex ? tabIndex : null}
                        ref={ref? ref : null}
                />
        </div>
        );
};

export default Input;