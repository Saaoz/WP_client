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
    const projectIdFromUrl = searchParams.get('orderSheet');
    const projectId = projectIdFromUrl || location.state?.orderSheet;

    const projectNameFromUrl = searchParams.get('worksite_name');
    const projectName = projectNameFromUrl || location.state?.worksite_name;

    if (projectId && projectId !== projectIdFromUrl) {
        searchParams.set('orderSheet', projectId);
        navigate(`?${searchParams.toString()}`);
    }

    if (projectName && projectName !== projectNameFromUrl) {
        searchParams.set('worksite_name', projectName);
        navigate(`?${searchParams.toString()}`);
    }

    const linkCouv1 = `/foldingchoice/Couvertines/1?orderSheet=${projectId}&worksite_name=${projectName}`;
    const linkCouv2 = `/foldingchoice/Couvertines/2?orderSheet=${projectId}&worksite_name=${projectName}`;
    const linkCouv3 = `/foldingchoice/Couvertines/3?orderSheet=${projectId}&worksite_name=${projectName}`;

    return (
        <div className='folding-page'>
            <Header />
            <div className='folding-container-choice'>
                {/* voir comment ajouter le nom du chantier */}
                <p> {projectName} </p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate(`/foldingchoice?orderSheet=${projectId}&worksite_name=${projectName}`)} />
                <h2>Choix de couvertines</h2>

                <div className='coif-img-container'>
                    <Link to={linkCouv1} >
                        <img src={couvertine1} alt='Couvertines' />
                    </Link>
                    <Link to={linkCouv2} >
                        <img src={couvertine2} alt='Couvertines' />
                    </Link>
                    <Link to={linkCouv3} >
                        <img src={couvertine3} alt='Couvertines' />
                    </Link>
                </div>
            </div>
        </div>
    );
}




export default Couvertines_choice;
