import './index.css';
import { useForm } from 'react-hook-form';
import Login from '../../api/login';

const LogingForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const formData = {
            mail: data.mail,
            password: data.password
        }
        Login(formData)
    }
    
    

    return (
        <form className='logingform' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='title-loging-form'>Se connecter</h1>
            {/* /ferme le form and refresh page */}
            <span onClick={() => window.location.reload()} className="span-close" title="Close form">&times;</span>

            <label htmlFor="input-user" className='label-loging-form'>Email utilisateur</label>
            <input type="email" className='input-user' placeholder='Email' {...register('mail', { required: true })} />

            <label htmlFor="input-password" className='label-loging-form'>Mot de passe</label>
            <input type="password" className='input-password' placeholder='Password' {...register('password', { required: true })} />

            <button type="submit" className='submit-loging-form'>Se connecter</button>
            
        </form>
    )
};

export default LogingForm;