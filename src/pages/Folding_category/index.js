import './index.css';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import couvertine from '../../sources/imgs/couvertine.svg'
import bavette from '../../sources/imgs/bib.svg'


const Folding_category = () => {
    const navigate = useNavigate();

    return (
        <div className='folding-category-page'>
            <Header />
            <div className='folding-container-choice'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate('/')} />
                <h2>Choix du pliage</h2>

                <div className='img-container'>
                    <Link to='/foldingchoice/Couvertines'>
                        <img src={couvertine} alt='couvertines' />
                    </Link>
                    <Link to='/foldingchoice/Bavettes'>
                        <img src={bavette} alt='bavettes' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Folding_category;