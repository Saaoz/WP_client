import './index.css';
import BuildingCard from '../../components/BuildingCard';
import Header from '../../components/Header';

const Chantier_Existant = () => {


    return (
        <div className="chantier_existant_page">
            <Header />
            <div className='chantier_existant_container'>
        {/* --------------- */}
        {/* attention data en DURE  */}
        {/* --------------- */}
            <h1>Building sites</h1>
            <div className='last_buildings'>
            <BuildingCard dataBuilding={{'name':'Super U', 'id':'3'}}/>
            <BuildingCard dataBuilding={{'name':'Sourcydis', 'id':'4'}}/>
            <BuildingCard dataBuilding={{'name':'Nextcity', 'id':'5'}}/>
            </div>
            </div>
        </div>
    );
};

export default Chantier_Existant;