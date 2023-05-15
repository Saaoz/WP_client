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

    // revoir le nom des constantes pour qu'elles restent cohérentes
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

    const linkToCouv = `/foldingchoice/Couvertines?orderSheet=${projectId}&worksite_name=${projectName}`;
    const linkToBav = `/foldingchoice/Bavettes?orderSheet=${projectId}&worksite_name=${projectName}`;
    


    return (
        <div className='folding-category-page'>
            <Header />
            <div className='folding-container-choice'>
                
                <div className='flex-header'>
                    <p> <span className='bold-underlined'>Chantier :</span> {projectName} </p>
                    <Button className='btn1' value='Retour' onClick={() => navigate('/chantier_existant/')} />
                </div>

                <h2>Choix du pliage : </h2>

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