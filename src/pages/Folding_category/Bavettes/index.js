import './index.css';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Bavettes_choice() {
    const navigate = useNavigate();

    return (
        <div className='folding-page'>
            <div className='folding-container'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate('/')} />
                <h2>Choix de bavettes</h2>
                
                <div className='bib-img-container'>
                    <Link to='/bavettes/bavettes1'><img src='../../../sources/imgs/bib1.svg' alt='bavettes' /></Link>
                    <Link to='/bavettes/bavettes2'><img src='../../../sources/imgs/bib2.svg' alt='bavettes' /></Link>
                    <Link to='/bavettes/bavettes3'><img src='../../../sources/imgs/bib3.svg' alt='bavettes' /></Link>
                </div>
            </div>
        </div>
    );
}




export default Bavettes_choice;
