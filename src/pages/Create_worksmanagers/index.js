import './index.css';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';


const Create_worksmanagers = () => {
    const navigate = useNavigate();

    return (
        <div className='create-worksmanagers-page'>
            <Header/>
            <div className='create-worksmanagers-container'>
                <h1>Create new workmanager</h1>
                <form className='create-worksmanagers-form'>
                    <Input placeholder='First name' type='text' id='firstName'/>
                    <Input placeholder='Last name' type='text' id='lastName'/>
                    <Input placeholder='Email' type='email' id='email'/>

                    <Input placeholder='Login' type='text' id='login'/>
                    <Input placeholder='Password' type='password' id='password'/>
                    <div className='cta-container'>
                        <input className='btn1' type='submit' value='Create'/>
                        <Button className='btn1' value='Cancel' onClick={()=>navigate('/')}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create_worksmanagers;