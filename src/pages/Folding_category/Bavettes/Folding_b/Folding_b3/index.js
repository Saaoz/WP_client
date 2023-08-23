import './index.css';
import Header from '../../../../../components/Header';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import Checkbox from '../../../../../components/Checkbox';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFoldingsData } from '../../../../../api/foldings';

import bavette1 from '../../../../../sources/imgs/bib3cotation.svg'

const Third_folding_b = () => {
    const navigate = useNavigate();

    // récupération ID
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

    
        //récupération des données de tous les pliages pour une ordersheet
        const [foldingDatas, setFoldingDatas] = useState([]);

        const [index, setIndex] = useState(foldingDatas.length + 1);
        const [dim1, setDim1] = useState(40);
        const [dim2, setDim2] = useState('');
        const [dim3, setDim3] = useState(50);
        const [epaisseur, setEpaisseur] = useState(75);
        const [type, setType] = useState('ACIER');
        const [ral, setRal] = useState('');
        const [quantity, setQuantity] = useState('');
        const [longueur, setLongueur] = useState(4000);
        const [developpe, setDeveloppe] = useState(0);
        const [inputStatus, setInputStatus] = useState(true);
        const [checked, setChecked] = useState(true);

        useEffect(() => {
            //fonction de nom getOffer de type async pour surveillé la constante response appelant la fonction getOffers
            const getfoldingData = async () => {
                const response = await getFoldingsData(projectId);
                    //mise à jour de offer
                setFoldingDatas(response);
            };
            //execution des functions en fin de useEffect
            getfoldingData();
        },[]);
        
        useEffect(() => {
            setIndex(foldingDatas.length + 1)
        }, [foldingDatas])



    const handleChangeDim1 = (event) => {
        const value = event.target.value;
        const newValue = value === "" ? 0 : parseFloat(value);
        setDim1(newValue);
    };
    const handleChangeDim2 = (event) => {
        const value = event.target.value;
        const newValue = value === "" ? 0 : parseFloat(value);
        setDim2(newValue);
    };
    const handleChangeDim3 = (event) => {
        const value = event.target.value;
        const newValue = value === "" ? 0 : parseFloat(value);
        setDim3(newValue);
    };

    useEffect(() => {
        //calcul du développé

        if (dim2 !== '') {

            setDeveloppe(parseInt(dim1) + parseInt(dim2) + parseInt(dim3));
        }

        //si tous les champs sont remplis on libère la function valider
        if (dim1 !== '' && dim2 !== '' && dim3 !== '' && epaisseur !== '' && type !== '' && ral !== '' && longueur !== '' && developpe !== '' && quantity !== '') {
            setInputStatus(false);
        } else {
            setInputStatus(true);
        };

    }, [dim1, dim2, dim3, epaisseur, type, ral, longueur, developpe, quantity]);

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

        Cliquez sur "OK" pour confirmer ou sur "Annuler" pour annuler.`);

        if (confirmation) {

            const folding = {
                "category": "Bavette 2 plis sans goutte d'eau",
                "identification": index,
                "type": type,
                "ral": ral,
                "thickness": epaisseur,
                "length": longueur,
                "quantity": quantity,
                "dim1": dim1,
                "dim2": dim2,
                "dim3": dim3,
                "dim4": null,
                "dim5": null,
                "dim6": null,
                "dev": developpe,
                "angle1": null,
                "angle2": null,
                "angle3": null,
                "angle4": null,
                "angle5": null,
                "order_sheet_id": projectId
            };

            const foldingResponse = await fetch('http://localhost:8080/api/foldings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(folding)
            });
            const foldingData = await foldingResponse.json();
            if (foldingResponse.ok) {
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
                if (checked === true) {
                    navigate(`/foldingchoice?orderSheet=${projectId}&worksite_name=${projectName}`);
                } else {
                    // édition du pdf
                    navigate(`/pdf?orderSheet=${projectId}&worksite_name=${projectName}`);
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
                <p>{projectName}</p>
                {/* changement de la route pour retourner sur le choix de pliage */}
                <Button
                    className='btn1'
                    value='Retour'
                    onClick={() => navigate(`/foldingchoice/Bavettes?orderSheet=${projectId}&worksite_name=${projectName}`)}
                />
                <h2>Bavette 2 plis sans goutte d'eau</h2>

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
                                onChange={(e) => handleChangeDim1(e)}
                                value={dim1}
                                required
                            />
                            <Input
                                className='input dim dim2'
                                type='number'
                                onChange={(e) => handleChangeDim2(e)}
                                value={dim2}
                                required
                            />
                            <Input
                                className='input dim dim3'
                                type='number'
                                onChange={(e) => handleChangeDim3(e)}
                                value={dim3}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-cta'>
                        <input className='btn1' type='submit' value='VALIDER' onClick={handleSubmit} disabled={inputStatus} />
                        <Checkbox
                            className='checkbox'
                            value='Ajouter un pliage'
                            status={checked}
                            onChange={() => setChecked(!checked)}
                        />
                    </div>
                </form>
            </div>

            <div className='folding-container'>
                <Button 
                    className='btn1' 
                    value='Finaliser' 
                    onClick={() => navigate(`/pdf?orderSheet=${projectId}&worksite_name=${projectName}`)} 
                />
                <p>{projectName}</p>
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
                        {foldingDatas.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{item.identification}</th>
                                    <th>{item.type}</th>
                                    <th>{item.thickness}</th>
                                    <th>{item.dev}</th>
                                    <th>{item.quantity}</th>
                                    <th>{item.length}</th>
                                    <th>{item.ral}</th>
                                    <th>{item.dim1}</th>
                                    <th>{item.dim2}</th>
                                    <th>{item.dim3}</th>
                                    <th>{item.dim4}</th>
                                    <th>{item.dim5}</th>
                                    <th>{item.dim6}</th>
                                    <th>{item.category}</th>
                                </tr>
                            )}
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}






export default Third_folding_b;