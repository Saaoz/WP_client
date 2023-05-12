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
    const projectIdFromUrl = searchParams.get('projectId');
    const projectId = projectIdFromUrl || location.state?.projectId;
    
    const projectNameFromUrl = searchParams.get('projectName');
    const projectName = projectNameFromUrl || location.state?.projectName;
    
    if (projectId && projectId !== projectIdFromUrl) {
      searchParams.set('projectId', projectId);
      navigate(`?${searchParams.toString()}`);
    }
    
    if (projectName && projectName !== projectNameFromUrl) {
      searchParams.set('projectName', projectName);
      navigate(`?${searchParams.toString()}`);
    }

    const linkToCouv = `/foldingchoice/Couvertines?projectId=${projectId}&projectName=${projectName}`;
    const linkToBav = `/foldingchoice/Bavettes?projectId=${projectId}&projectName=${projectName}`;
    


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