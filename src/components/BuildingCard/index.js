import './index.css';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BuildingCard = ({ dataBuilding }) => {
    const navigate = useNavigate();
    const { id, name } = dataBuilding;
    const [isCreatingOrderSheet, setIsCreatingOrderSheet] = useState(false);
    const [addressId, setAddressId] = useState('');

    useEffect(() => {
        const fetchWorksiteDetails = async () => {
            try {
                const response = await fetch(`/api/work_sites/${id}`);
                if (response.ok) {
                    const worksiteData = await response.json();
                    setAddressId(worksiteData.address_id);
                } else {
                    console.error('Erreur lors de la récupération des détails du chantier');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du chantier :', error);
            }
        };

        fetchWorksiteDetails();
    }, [id]);

    const createOrderSheet = async () => {
        // Vérifier si la création de l'order sheet est déjà en cours
        if (isCreatingOrderSheet) {
            return;
        }

        setIsCreatingOrderSheet(true);

        const orderSheet = {
            worksite_id: id,
            worksite_address_id: addressId,
            worksite_name: name
        };

        try {
            const response = await fetch('/api/order_sheets/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderSheet)
            });

            if (response.ok) {
                const orderSheetData = await response.json();
                const orderSheetId = orderSheetData.id;
                navigate(`/foldingchoice/`, { state: { orderSheet: orderSheetId, worksite_name: name } });
            } else {
                console.error('Erreur lors de la création de l\'order sheet');
            }
        } catch (error) {
            console.error('Erreur lors de la création de l\'order sheet :', error);
        } finally {
            setIsCreatingOrderSheet(false);
        }
    };
/////////////////////////////////////////////////////////////////////////////////
//je veux avoir toutes les order sheets pour chaque chantier
/////////////////////////////////////////////////////////////////////////////////
    const [orderSheets, setOrderSheets] = useState([]);
    useEffect(() => {
        const fetchOrderSheetsDetails = async () => {
            try {
                const response = await fetch(`/api/order_sheets/worksite/${id}`);
                if (response.ok) {
                    const orderSheetsData = await response.json();
                    setOrderSheets(orderSheetsData[0]);
                } else {
                    console.error('Erreur lors de la récupération des détails des order sheets');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails des order sheets :', error);
            }
        };

        fetchOrderSheetsDetails();
    }, [id]);


    return (
        <div className="building-card">
            <h3>{name}</h3>
            {/* remplacer under_construction par le lien de la consultation quand elle sera créé type /chantier_consultation/${id} pdf?orderSheet=84&worksite_name=mfz*/}
            <p>Lire la : <Link to={`/pdf?orderSheet=${orderSheets.id}&worksite_name=${name}`}>Dernière consultation</Link></p>
            <Button className="btn1" value="Nouv. demande de prix" onClick={createOrderSheet} />
        </div>
    );
};

export default BuildingCard;
