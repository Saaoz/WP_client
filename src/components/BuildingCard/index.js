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
                const response = await fetch(`http://localhost:8080/api/work_sites/${id}`);
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
            const response = await fetch('http://localhost:8080/api/order_sheets/', {
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

    return (
        <div className="building-card">
            <h3>{name}</h3>
            {/* remplacer under_construction par le lien de la consultation quand elle sera créé type /chantier_consultation/${id} */}
            <p>Lire la : <Link to={`/under_construction`}>Dernière consultation</Link></p>
            <Button className="btn1" value="Nouv. demande de prix" onClick={createOrderSheet} />
        </div>
    );
};

export default BuildingCard;
