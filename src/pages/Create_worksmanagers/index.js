import './index.css';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';


const Create_worksmanagers = () => {
    const navigate = useNavigate();
    

    return (
        <>
            <Header />
            <div className='create-worksmanagers-page'>

                <div className='create-worksmanagers-container'>
                    <h1>Créer un conducteur de travaux :</h1>
                    <form className='create-worksmanagers-form'>
                        <Input placeholder='Prénom' type='text' id='firstName' />
                        <Input placeholder='Nom' type='text' id='lastName' />
                        <Input placeholder='Email' type='email' id='email' />

                        <Input placeholder='Login' type='text' id='login' />
                        <Input placeholder='Mot de passe' type='password' id='password' />
                        <div className='cta-container'>
                            <input className='btn1' type='submit' value='Créer' />
                            <Button className='btn1' value='Annuler' onClick={() => navigate('/')} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create_worksmanagers;