import './index.css'

const LogingForm = () => {
    return (
        <form className='logingform'>
            <h1 className='title-loging-form'>Se connecter</h1>
            {/* /ferme le form and refresh page */}
            <span onClick={() => window.location.reload()} className="span-close" title="Close foem">&times;</span>

            <label htmlFor="input-user" className='label-loging-form'>Nom d'utilisateur</label>
            <input type='email' id='input-user' className='input-user' name='input-user' placeholder='Email'/>

            <label htmlFor="input-password" className='label-loging-form'>Mot de passe</label>
            <input type='password' id='input-password' className='input-password' name='input-password' placeholder='Password'/>

            <input type='submit' id='submit-loging-form' className='submit-loging-form' name='submit-loging-form' value='Se connecter'/>
            
        </form>
    )
};

export default LogingForm;