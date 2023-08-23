import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


function Home() {
    // console.log(sessionStorage.getItem('works_manager_firstname'))

    return (
        <div className="home-container" >
            <Header />
            <div className='home-content'>
                {/* quand le système de login sera en place, envoyer vers le login avant de pouvoir accéder aux pages */}
                <Link to="/createproject" className='Create'>
                    <Button className = 'btn-home-newWorksite' value = 'Nouveau chantier'/>
                </Link>
                <Link to="/chantier_existant/" className='Chantier_Existant'>
                    <Button className = 'btn-home-existingWorksite' value = 'Liste des chantiers'/>
                </Link>
            </div>
        </div>
    );
}

export default Home;