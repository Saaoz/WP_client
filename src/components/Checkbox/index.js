import './index.css';

const Checkbox = ({value, onChange, status, id, tabIndex}) => {
    if (status === true) {
        return (

            <label className="container">{value}
            <input type="checkbox" className="checkbox" id={id} onChange={onChange} checked tabIndex={tabIndex}/>
            <span className="checkmark"></span>
            </label>
    
        );
    } else {
        return (

            <label className="container">{value}
            <input type="checkbox" className="checkbox" id={id} onChange={onChange} tabIndex={tabIndex} />
            <span className="checkmark"></span>
            </label>
    
        );
    };
};

export default Checkbox;