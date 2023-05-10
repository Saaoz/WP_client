import './index.css';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import Checkbox from '../../../../../components/Checkbox';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import bavette1 from '../../../../../sources/imgs/bib1cotation.svg'

function First_folding_b() {
    const navigate = useNavigate();

    const [index, setIndex] = useState('A');
    const [dim1, setDim1] = useState(40);
    const [dim2, setDim2] = useState('');
    const [dim3, setDim3] = useState(50);
    const [dim4, setDim4] = useState(10);
    const [epaisseur, setEpaisseur] = useState(75);
    const [type, setType] = useState('ACIER');
    const [ral, setRal] = useState('');
    const [quantity, setQuantity] = useState('');
    const [longueur, setLongueur] = useState(4000);
    const [developpe, setDeveloppe] = useState(0);
    const [inputStatus, setInputStatus] = useState(true);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        //calcul du développé
        
        if(dim2!==''){
            
        setDeveloppe(parseInt(dim1)+parseInt(dim2)+parseInt(dim3)+parseInt(dim4));
        }

        //si tous les champs sont remplis on libère la function valider
        if(dim2!==''&& ral!=='' && quantity!==''){
            setInputStatus(false);
        }else{
            setInputStatus(true);
        };

    },[dim1,dim2,dim3,dim4,ral,quantity]);

    //si un pliage existe définir la lettre de l'index selon le nombre de pliage de la demande de prix en cours faire un GET sur l'ID de ordersheet pour avoir le tableau de pliage et selon la longueur définir la lettre de l'index






    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const confirmation = window.confirm(`Êtes-vous sûr de vouloir créer le pliage avec les données suivantes :

        type : ${type} 
        ral : ${ral}
        thickness : ${epaisseur}
        long : ${longueur}
        dim1 : ${dim1}
        dim2 : ${dim2}
        dim3 : ${dim3}
        dim4 : ${dim4}

        Cliquez sur "OK" pour confirmer ou sur "Annuler" pour annuler.`);

        if(confirmation) {

            const folding = {
                "category": "Bavette 3 plis avec goutte d'eau externe",
                "identification": index,
                "type": type,
                "ral": ral,
                "thickness": epaisseur,
                "length": longueur,
                "quantity": quantity,
                "dim1": dim1,
                "dim2": dim2,
                "dim3": dim3,
                "dim4": dim4,
                "dim5": null,
                "dim6": null,
                "dev": developpe,
                "angle1": null,
                "angle2": null,
                "angle3": null,
                "angle4": null,
                "angle5": null,
                "order_sheet_id": 1
            };

            const foldingResponse = await fetch('http://localhost:8080/api/folding', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(folding)
            });
            const foldingData = await foldingResponse.json();
            if(foldingResponse.ok) {
                alert(`Le plage a été créé avec succès avec :
                id : ${foldingData.id}.
                Catégorie : ${foldingData.category}.
                Type : ${foldingData.type}.
                RAL : ${foldingData.ral}.
                Thickness : ${foldingData.thickness}.
                Longueur : ${foldingData.long}.
                Dimension 1 : ${foldingData.dim1}.
                Dimension 2 : ${foldingData.dim2}.
                Dimension 3 : ${foldingData.dim3}.
                Dimension 4 : ${foldingData.dim4}.
                Dimension 5 : ${foldingData.dim5}.
                Dimension 6 : ${foldingData.dim6}.
                Développé : ${foldingData.dev}.
                Angle 1 : ${foldingData.angle1}.
                Angle 2 : ${foldingData.angle2}.
                Angle 3 : ${foldingData.angle3}.
                Angle 4 : ${foldingData.angle4}.
                Angle 5 : ${foldingData.angle5}.
                `);
                if(checked === true){
                    navigate('/foldingchoice');
                }else{
                    // chemin a changer pour éditer la pièce joint
                    navigate('/');
                };
            } else {
                alert('Une erreur est survenue lors de la création du pliage.');
            }
        } else {
            alert('La création du pliage a été annulée.');
        }
    }



    

    return (

        <div className='folding-page'>
            <Header />
            <div className='folding-container'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button 
                    className='btn1' 
                    value='Retour' 
                    onClick={() => navigate('/')} 
                />
                <h2>Bavette 3 plis avec goutte d'eau externe</h2>
                
                <form className='form-bib'>
                    <div className='form-content'>
                        {/* si un pliage existe définir la lettre de l'index selon le nombre de pliage de la demande de prix en cours */}
                        <div className='info-folding'>
                            <div className='input-content'>
                                <label>Pliage:</label>
                                <Input 
                                    className='input info' 
                                    type='text' 
                                    inputStatus='true'
                                    value={index}
                                    required
                                />
                            </div>
                            <div className='input-content'>
                                <label>Epaiseur (/100):</label>
                                <Input 
                                    className='input info' 
                                    type='number' 
                                    value={epaisseur}
                                    onChange={(e) => setEpaisseur(parseInt(e.target.value))}
                                    required
                                />
                            </div>
                            <div className='input-content'>
                                <label>Type:</label>
                                <Input 
                                    className='input info' 
                                    type='text' 
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input-content'>
                                <label>RAL:</label>
                                <Input 
                                    className='input info' 
                                    type='text' 
                                    placeholder='RAL'
                                    value={ral}
                                    onChange={(e) => setRal(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input-content'>
                                <label>Quantité:</label>
                                <Input 
                                    className='input info' 
                                    type='number' 
                                    placeholder='Qte'
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input-content'>
                                <label>Longueur:</label>
                                <Input 
                                    className='input info' 
                                    type='number' 
                                    value={longueur}
                                    onChange={(e) => setLongueur(parseInt(e.target.value))}
                                    required
                                    />
                            </div>
                            <div className='input-content'>
                                <label>Développé:</label>
                                <Input 
                                    className='input info' 
                                    type='number' 
                                    inputStatus='true' 
                                    value={developpe}
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className='form-schema'>
                            <div className='bib-img-container'>
                                <img src={bavette1} alt='bavettes' />
                            </div>
                            
                            {/* les dimension du pliage */}
                            <Input 
                                className='input dim dim1' 
                                type='number' 
                                onChange={(e) => setDim1(parseInt(e.target.value))}
                                value={dim1}
                                required
                            />
                            <Input 
                                className='input dim dim2' 
                                type='number' 
                                onChange={(e) => setDim2(parseInt(e.target.value))} 
                                value={dim2}
                                required
                            />
                            <Input 
                                className='input dim dim3' 
                                type='number' 
                                onChange={(e) => setDim3(parseInt(e.target.value))} 
                                value={dim3}
                                required
                            />
                            <Input 
                                className='input dim dim4' 
                                type='number' 
                                onChange={(e) => setDim4(parseInt(e.target.value))}
                                value={dim4}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-cta'>
                        <input className='btn1' type='submit' value='VALIDER' onClick={handleSubmit} disabled={inputStatus}/> 
                        <Checkbox 
                            className='checkbox' 
                            value='Ajouter un pliage' 
                            status={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </div>
                    console.log(tintin);
                </form>
            </div>

            <div className='folding-container'>
                {/* voir comment ajouter le nom du chantier */}
                <p>nom du chantier!!</p>
                <h2>Liste des pliages de la demande de prix en cours</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Type</th>
                            <th>Epaisseur</th>
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