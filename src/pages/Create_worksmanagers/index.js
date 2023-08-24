import './index.css';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Create_worksmanagers = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const confirmation = window.confirm(`Êtes-vous sûr de vouloir créer un nouveau conducteur de travaux avec les données suivantes :

        Nom : ${firstName}
        Prénom : ${lastName}
        Email : ${email}
        Login : ${login}
        Mot de passe : ${password}

        Cliquez sur "OK" pour confirmer ou sur "Annuler" pour annuler.`);

        if (confirmation) {
            
            const workmanager = {
                "firstname": firstName,
                "lastname": lastName,
                "mail": email,
                "login": login,
                "password": password
            };

            const workmanagerResponse = await fetch('/api/works_managers/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(workmanager)
            });
            const workmanagerData = await workmanagerResponse.json();
            if (workmanagerResponse.ok) {
                alert(`Le conducteur de travaux a été créé avec succès avec :
                id : ${workmanagerData.id}.
                Nom : ${workmanagerData.firstname}.
                Prénom : ${workmanagerData.lastname}.
                Email : ${workmanagerData.mail}.
                Login : ${workmanagerData.login}.
                Mot de passe : ${workmanagerData.password}.
                `);
                navigate('/');

            } else {
                alert('Une erreur est survenue lors de la création du conducteur de travaux.');
            }
        } else {
            alert('La création du conducteur de travaux a été annulée.');
        }
    }

    return (
        <>
            <Header />
            <div className='create-worksmanagers-page'>

                <div className='create-worksmanagers-container'>
                    <h1>Créer un conducteur de travaux :</h1>
                    <form className='create-worksmanagers-form'>
                        <Input 
                            placeholder='Prénom' 
                            type='text' 
                            id='firstName' 
                            onChange={(e) => setFirstName(e.target.value)} required/>
                        <Input placeholder='Nom' type='text' id='lastName' onChange={(e) => setLastName(e.target.value)} required/>
                        <Input placeholder='Email' type='email' id='email' onChange={(e) => setEmail(e.target.value)} required/>

                        <Input placeholder='Login' type='text' id='login' onChange={(e) => setLogin(e.target.value)} required/>
                        <Input placeholder='Mot de passe' type='password' id='password' onChange={(e) => setPassword(e.target.value)} required/>
                        
                        <div className='cta-container'>
                            <input className='btn1' type='submit' value='Créer' onClick={handleSubmit}/>
                            <Button className='btn1' value='Annuler' onClick={() => navigate('/')} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};


export default Create_worksmanagers;