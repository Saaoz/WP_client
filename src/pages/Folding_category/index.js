import './index.css';
import Button from '../../components/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import couvertine from '../../sources/imgs/couvertine.svg';
import bavette from '../../sources/imgs/bib.svg';

const Folding_category = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const projectIdFromUrl = searchParams.get('projectId');

    const projectId = projectIdFromUrl || location.state?.projectId;

    if (projectId && projectId !== projectIdFromUrl) {
        searchParams.set('projectId', projectId);
        navigate(`?${searchParams.toString()}`);
    }

    const linkToCouv = `/foldingchoice/Couvertines?projectId=${projectId}`;
    const linkToBav = `/foldingchoice/Bavettes?projectId=${projectId}`;


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
                    <Link to={linkToCouv}>
                        <img src={couvertine} alt='couvertines' />
                    </Link>
                    <Link to={linkToBav}>
                        <img src={bavette} alt='bavettes' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Folding_category;