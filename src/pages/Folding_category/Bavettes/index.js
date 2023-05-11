import './index.css';
import Button from '../../../components/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import bavette1 from '../../../sources/imgs/bib1.svg';
import bavette2 from '../../../sources/imgs/bib2.svg';
import bavette3 from '../../../sources/imgs/bib3.svg';
import Header from '../../../components/Header';


function Bavettes_choice() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectIdFromUrl = searchParams.get('projectId');

    const projectId = projectIdFromUrl || location.state?.projectId;

    if (projectId && projectId !== projectIdFromUrl) {
        searchParams.set('projectId', projectId);
        navigate(`?${searchParams.toString()}`);
    }
    const linkBav1 = `/foldingchoice/Bavettes/1?projectId=${projectId}`;
    const linkBav2 = `/foldingchoice/Bavettes/2?projectId=${projectId}`;
    const linkBav3 = `/foldingchoice/Bavettes/3?projectId=${projectId}`;

    return (
        <div className='folding-page'>
            <Header />
            <div className='folding-container-choice'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate(`/foldingchoice?projectId=${projectId}`)} />
                <h2>Choix de bavettes</h2>
                <div className='bib-img-container'>
                    <Link to= {linkBav1} >
                        <img src={bavette1} alt='bavettes' />
                    </Link>
                    <Link to= {linkBav2} >
                        <img src={bavette2} alt='bavettes' />
                    </Link>
                    <Link to= {linkBav3} >
                        <img src={bavette3} alt='bavettes' />
                    </Link>
                </div>
            </div>
        </div>
    );
}




export default Bavettes_choice;
