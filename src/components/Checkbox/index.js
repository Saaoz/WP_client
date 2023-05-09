import './index.css';

const Checkbox = ({value, onChange, status, id, }) => {
    if (status === true) {
        return (

            <label className="container">{value}
            <input type="checkbox" className="checkbox" id={id} onChange={onChange} checked/>
            <span className="checkmark"></span>
            </label>
    
        );
    } else {
        return (

            <label className="container">{value}
            <input type="checkbox" className="checkbox" id={id} onChange={onChange} />
            <span className="checkmark"></span>
            </label>
    
        );
    };
};

export default Checkbox;