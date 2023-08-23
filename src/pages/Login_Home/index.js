import './index.css';
import Header from '../../components/Header';
import LogingForm from '../../components/LogingForm';
import { Link } from 'react-router-dom';


function Login () {

    return (
        <div>
            <Header />
            <div className='login'>
                    <LogingForm />
            </div>
        </div>
    );
};

export default Login;