import './index.css';
import Header from '../../components/Header';
import LogingForm from '../../components/LogingForm';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollUp';


function Login () {

    return (
        <div>
            <ScrollToTop/>
            <Header />
            <div className='login'>
                    <LogingForm />
            </div>
        </div>
    );
};

export default Login;