import './index.css';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import bavette1 from '../../../sources/imgs/bib1.svg';
import bavette2 from '../../../sources/imgs/bib2.svg';
import bavette3 from '../../../sources/imgs/bib3.svg';
import Header from '../../../components/Header';


function Bavettes_choice() {
    const navigate = useNavigate();

    return (
        <div className='folding-page'>
            <Header />
            <div className='folding-container'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate('/foldingchoice')} />
                <h2>Choix de bavettes</h2>
                
                <div className='bib-img-container'>
                    <Link to='/foldingchoice/Bavettes/1'>
                        <img src={bavette1} alt='bavettes' />
                    </Link>
                    <Link to='/foldingchoice/Bavettes/2'>
                        <img src={bavette2} alt='bavettes' />
                    </Link>
                    <Link to='/foldingchoice/Bavettes/3'>
                        <img src={bavette3} alt='bavettes' />
                    </Link>
                </div>
            </div>
        </div>
    );
}




export default Bavettes_choice;
