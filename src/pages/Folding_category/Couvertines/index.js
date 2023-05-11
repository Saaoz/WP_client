import './index.css';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import couvertine1 from '../../../sources/imgs/coif1.svg';
import couvertine2 from '../../../sources/imgs/coif2.svg';
import couvertine3 from '../../../sources/imgs/coif3.svg';
import Header from '../../../components/Header';


const Couvertines_choice = () => {
    const navigate = useNavigate();

    return (
        <div className='folding-page'>
            <Header />
            <div className='folding-container-choice'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate('/foldingchoice')} />
                <h2>Choix de couvertines</h2>
                
                <div className='coif-img-container'>
                    <Link to='/foldingchoice/Couvertines/1'>
                        <img src={couvertine1} alt='Couvertines' />
                    </Link>
                    <Link to='/foldingchoice/Couvertines/2'>
                        <img src={couvertine2} alt='Couvertines' />
                    </Link>
                    <Link to='/foldingchoice/Couvertines/3'>
                        <img src={couvertine3} alt='Couvertines' />
                    </Link>
                </div>
            </div>
        </div>
    );
}




export default Couvertines_choice;
