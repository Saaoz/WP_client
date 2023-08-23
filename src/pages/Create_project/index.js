import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from '../../components/Button';
import Input from '../../components/Input';
import './index.css';
import '../../components/Button/index.css'
import '../../components/Input/index.css'

function Create_project() {
    const navigate = useNavigate();
    const [worksite_name, setWorksite_name] = useState('');
    const [street, setStreet] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [city, setCity] = useState('');
    const works_manager_id = sessionStorage.getItem("works_manager_id");


    const handleSubmit = async (e) => {
        e.preventDefault();

        // remplacer les alerts par des modales de confirmation
        const confirmation = window.confirm(`Êtes-vous sûr de vouloir créer un nouveau chantier avec les données suivantes :
    
        Nom du chantier : ${worksite_name}
        Adresse : ${street}, ${postal_code} ${city}
        
        Cliquez sur "OK" pour confirmer ou sur "Annuler" pour annuler.`);

        // si confirmation, création de l'objet address liée au chantier
        if (confirmation) {
            const address = {
                "street": street,
                "postal_code": postal_code,
                "city": city
            };
            // on envoie l'objet address en fetchant l'API avec la méthode POST
            const addressResponse = await fetch('http://localhost:8080/api/addresses/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(address)
            });
            const addressData = await addressResponse.json();
            const addressId = addressData.id;

            // une fois l'adresse postée en DB, on crée l'objet worksite grâce à l'adresse_id de l'adresse
            const worksite = {
                "name": worksite_name,
                "works_manager_id": works_manager_id,
                "address_id": addressId
            };

            // on envoie l'objet worksite en fetchant l'API avec la méthode POST
            const worksiteResponse = await fetch('http://localhost:8080/api/work_sites/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(worksite)
            });
            const worksiteData = await worksiteResponse.json();

            // si le chantier est bien posté, on confirme à l'utilisateur
            if (worksiteResponse.ok) {
                alert(`Le chantier a été créé avec succès avec : 
                id : ${worksiteData.id}.
                Nom : ${worksite_name}.
                Adresse : ${street}, ${postal_code} ${city}.`);

                // puis on crée l'objet order_sheet lié au chantier et à l'adresse
                const orderSheet = {
                    "worksite_id": worksiteData.id,
                    "worksite_address_id": addressId,
                    "worksite_name": worksite_name
                };

                // avant de l'envoyer en fetchant l'API avec la méthode POST
                const orderSheetResponse = await fetch('http://localhost:8080/api/order_sheets/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderSheet)
                });
                const orderSheetData = await orderSheetResponse.json();
                const orderSheetId = orderSheetData.id;

                // si la fiche de commande est bien postée,
                if (orderSheetResponse.ok) {

                    // on redirige vers la page de choix du pliage
                    navigate('/foldingchoice', { state: { orderSheet: orderSheetId, worksite_name: worksite_name } });
                } 
                // sinon on alerte l'utilisateur si une erreur lors d'une des créations est survenue
                else {
                    alert('Une erreur est survenue lors de la création de order_sheet.');
                }
            } else {
                alert(`Une erreur est survenue lors de la création du chantier.`);
            }
        } else {
            alert(`La création du chantier a été annulée.`);
        }
    }

    // on crée le formulaire avec les infos dont on a besoin pour créer le chantier, son adresse puis sa première fiche de commande
    return (
        <>
            <Header />
            <div className='back_formu'>
                <form className='formulaire' >
                    <h1>Créer un chantier :</h1>
                    <div className='input_zone'>
                        <Input className="input input_c" value={worksite_name} type="text" placeholder='Nom du chantier' onChange={(e) => setWorksite_name(e.target.value)} required />
                        <Input className="input input_a" value={street} type="text" placeholder='Numéro et nom de la rue' onChange={(e) => setStreet(e.target.value)} required />
                        <div className='input_bot'>
                            <Input className="input input_p" value={postal_code} type="text" maxlength="15" placeholder='Code postal' onChange={(e) => setPostal_code(e.target.value)} required />
                            <Input className="input input_v" value={city} type="text" placeholder=' Ville' onChange={(e) => setCity(e.target.value)} required />
                        </div>
                    </div>
                    <div className='btn_zone'>
                        <Button className="btn1" value="Retour" onClick={() => navigate('/')} />
                        <Button className="btn1" onClick={handleSubmit} value="Valider" />

                    </div>
                </form>
            </div>
        </>
    );
}
export default Create_project;