import './index.css';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import { useNavigate } from 'react-router-dom';

function First_folding_b() {
    const navigate = useNavigate();

    return (

        <div className='folding-page'>
            <Header />
            <div className='folding-container'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button className='btn1' value='Retour' onClick={() => navigate('/')} />

                <form className='form-bib'>
                    <h2>Bavette 3 plis avec goutte d'eau externe</h2>
                    
                    <div className='bib-img-container'>
                        <img src='../../../../sources/imgs/bib1.svg' alt='bavettes' />
                    </div>

                    <label>Epaiseur:</label>
                    <Input className='input' type='number' />

                    <label>Type</label>
                    <Input className='input' type='text' />

                    <label>RAL:</label>
                    <Input className='input' type='text' />

                    <label>Quantité:</label>
                    <Input className='input' type='number' />

                    <label>Longueur:</label>
                    <Input className='input' type='number' />

                    <label>Développé:</label>
                    <Input className='input' type='number' />

                    {/* si un pliage existe définir la lettre de l'index selon le nombre de pliage de la demande de prix en cours */}
                    <label>Pliage:</label>
                    <Input className='input' type='text' />

                    {/* les dimension du pliage */}
                    <Input className='input' type='number' />
                    <Input className='input' type='number' />
                    <Input className='input' type='number' />
                    <Input className='input' type='number' />

                    <Input className='input' type='submit' value='Envoyer votre consultation' />
                    <Input className='input' type='submit' value='VALIDER le pliage et ajouter un autre pliage' />
                    
                </form>
            </div>

            <div className='folding-order'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                <h2>Liste des pliages de la demande de prix en cours</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Type</th>
                            <th>Epaiseur</th>
                            <th>Développé</th>
                            <th>Quantité</th>
                            <th>Longueur</th>
                            <th>RAL</th>
                            <th>Dim1</th>
                            <th>Dim2</th>
                            <th>Dim3</th>
                            <th>Dim4</th>
                            <th>Dim5</th>
                            <th>Dim6</th>
                            <th>Pliage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* faire un boucle sur le tableau reprenant tous les pliages de la demande de prix */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}




export default First_folding_b;