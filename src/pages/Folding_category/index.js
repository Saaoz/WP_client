import './index.css';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Folding_category = () => {
    const navigate = useNavigate();

    const [order, setOrder] = useState([]);

    return (
        <div className='folding-category-page'>
            <div className='folding-category-container'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate('/')} />
                <h2>Choix du pliage</h2>

                <div className='img-container'>
                    <Link to='/foldingchoice/Couvertines'><img src='../../../sources/imgs/couvertine.svg' alt='couvertines' /></Link>
                    <Link to='/foldingchoice/Bavettes'><img src='../../../sources/imgs/bib.svg' alt='bavettes' /></Link>
                </div>
            </div>
        </div>
    );
}


export default Folding_category;