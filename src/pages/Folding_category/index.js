import './index.css';
import Button from '../../components/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import couvertine from '../../sources/imgs/couvertine.svg';
import bavette from '../../sources/imgs/bib.svg';
import ScrollToTop from '../../components/ScrollUp';

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




  const returnToChantier = async () => {
    //je vérifie si j'ai des pliages dans la dernière ordersheet en base de données si non delete l'ordersheet sinon je navigate vers le chantier_existant

    try {
      const response = await fetch(`/api/foldings/order_sheet/${projectId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const orderSheetFoldings = await response.json();
      
      if (response.status === 200) {
        if (orderSheetFoldings.length === 0) {
          const deletedOrderSheet = await fetch(`/api/order_sheets/${projectId}`, {
            method: 'DELETE'
          })
          const result = await deletedOrderSheet.json();
          console.log(result)
        }
      } else {
        console.error('Erreur lors de la récupération des détails des order sheets');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des détails des order sheets :', error);
    }

    navigate('/chantier_existant/');
  };

  return (
    <div className='folding-category-page'>
      <ScrollToTop/>
      <Header />
      <div className='folding-container-choice'>

        <div className='flex-header'>
          <p> <span className='bold-underlined'>Chantier :</span> {projectName} </p>
          <Button className='btn1' value='Retour' onClick={() => returnToChantier()} />
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