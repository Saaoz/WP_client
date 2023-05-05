import { useState } from "react";
import Header from "../../components/Header";
import Button from '../../components/Button';
import Input from '../../components/Input';
import './index.css';
import '../../components/Button/index.css'
import '../../components/Input/index.css'

function Create_project() {
    const [worksite_name, setWorksite_name] = useState('');
    const [street, setStreet] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const address = {
            "street": street,
            "postal_code": postal_code ,
            "city": city
        };
        const addressResponse = await fetch('http://localhost:8080/api/addresses/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(address)
        });
        const addressData = await addressResponse.json();
        const addressId = addressData.id;
        console.log('Address created with id:', addressId);
    


        const worksite = {
            "name": worksite_name,
            "works_manager_id": 5,
            "address_id": addressId
        };

        const worksiteResponse = await fetch('http://localhost:8080/api/work_sites/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(worksite)
        });
        const worksiteData = await worksiteResponse.json();
        console.log('Worksite created with id:', worksiteData.id);
    }



    return (
        <>
        <Header/>
        <div className='back_formu'>
            <form className='formulaire' >
                <h1>Creation d’un nouveau project </h1>
                <div className='input_zone'>
                    <Input className="input input_c" value={worksite_name} type="text" placeholder='Nom du chantier' onChange={(e) => setWorksite_name(e.target.value) } required/>
                    <Input className="input input_a" value={street} type="text" placeholder='Numéro et nom de la rue' onChange={(e) => setStreet(e.target.value)} required/>
                    <div className='input_bot'>
                        <Input className="input input_p" value={postal_code} type="number" placeholder='Code postal' onChange={(e) => setPostal_code(e.target.value) } required/>
                        <Input className="input input_v" value={city} type="text" placeholder=' Ville' onChange={(e) => setCity(e.target.value)} required/>
                    </div>
                </div>
                <div className='btn_zone'>
                    <Button className="btn2" onClick={handleSubmit} value="Valider" />
                    <Button className="btn2" value="Retour" />
                </div>
            </form>
        </div>
        </>
    );
}
export default Create_project;