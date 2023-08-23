const Login = async (formData) => {
    const body = JSON.stringify(formData);

    try {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        const result = await response.json();

        if (response.status === 200) {
            sessionStorage.setItem('isLogin', true);
            sessionStorage.setItem('works_manager_id', result.works_manager_id);
            sessionStorage.setItem('works_manager_firstname', result.works_manager_firstname);
            sessionStorage.setItem('works_manager_lastname', result.works_manager_lastname);
            sessionStorage.setItem('works_manager_mail', result.works_manager_mail);
            alert('Vous êtes connecté');
            window.location.href = '/';
        } else if (response.status === 401) {
            alert('Connexion non autorisée');
        } else if (response.status === 500) {
            alert('Un problème est survenu');
        }
    } catch (error) {
        console.log(error);
        alert('Une erreur est survenue');
    }
};

export default Login;
