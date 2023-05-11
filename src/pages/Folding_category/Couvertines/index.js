import './index.css';
import Button from '../../../components/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import couvertine1 from '../../../sources/imgs/coif1.svg';
import couvertine2 from '../../../sources/imgs/coif2.svg';
import couvertine3 from '../../../sources/imgs/coif3.svg';
import Header from '../../../components/Header';


const Couvertines_choice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectIdFromUrl = searchParams.get('projectId');

    const projectId = projectIdFromUrl || location.state?.projectId;
    
    if (projectId && projectId !== projectIdFromUrl) {
        searchParams.set('projectId', projectId);
        navigate(`?${searchParams.toString()}`);
    }

    const linkCouv1 = `/foldingchoice/Couvertines/1?projectId=${projectId}`;
    const linkCouv2 = `/foldingchoice/Couvertines/2?projectId=${projectId}`;
    const linkCouv3 = `/foldingchoice/Couvertines/3?projectId=${projectId}`;

    return (
        <div className='folding-page'>
            <Header />
            <div className='folding-container-choice'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!! </p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate(`/foldingchoice?projectId=${projectId}`)} />
                <h2>Choix de couvertines</h2>
                
                <div className='coif-img-container'>
                    <Link to= {linkCouv1} >
                        <img src={couvertine1} alt='Couvertines' />
                    </Link>
                    <Link to= {linkCouv2} >
                        <img src={couvertine2} alt='Couvertines' />
                    </Link>
                    <Link to= {linkCouv3} >
                        <img src={couvertine3} alt='Couvertines' />
                    </Link>
                </div>
            </div>
        </div>
    );
}




export default Couvertines_choice;
