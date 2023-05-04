import './index.css';
import Button from '../../components/Boutton';
import { useNavigate } from 'react-router-dom';

const BuildingCard = ({dataBuilding}) => {
    //préparation a la navigation
    const navigate = useNavigate();

    //la card doit avoir pour data :
    //nom du chantier,
    //id du chantier,
    //les inforamations de la dernière demande de prix,
        //date de la dernière demande de prix,
        //tous les pliages avec l'id de la demande de prix,



    //destructuration de dataBuilding
    const {id, name} = dataBuilding;
    //prévoir dans dataBuilding : le nom du chantier, l'id du chantier, les demandes de prix déjà passés.



    return (
        <div className ='building-card'>
            <h3>{name}</h3>
            <p>Dernière consultation</p>
            <div className = 'actionCote'>
                {/* botton pour consulterla dernière demande de prix */}
                <Button className = 'btn2' value = 'Read' onClick = {() => navigate(`/chantier_consultation/${id}`)}/>
                
                {/* button pour renvoyer la dernière demande de prix */}
                <Button className = 'btn2' value = 'Send again' onClick = {() => {}}/>
            </div>
            {/* button pour la création d'une nouvelle demande de prix envoyant l'id chantier */}
            <Button className = 'btn1' value = 'New folding' onClick = {() => {navigate(`/new_folding/${id}`)}}/>

        </div>
    );
};

export default BuildingCard;