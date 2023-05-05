import './index.css';
import BuildingCard from '../../components/BuildingCard';
import Header from '../../components/Header';

const Chantier_Existant = () => {


    return (
        <div className="existing-site-page">
            <Header />
            <div className='existing-site-container'>
        {/* --------------- */}
        {/* attention data en DURE  */}
        {/* --------------- */}
            <h1>Worksites</h1>
            <div className='last-worksite'>
            <BuildingCard dataBuilding={{'name':'Super U', 'id':'3'}}/>
            <BuildingCard dataBuilding={{'name':'Sourcydis', 'id':'4'}}/>
            <BuildingCard dataBuilding={{'name':'Nextcity', 'id':'5'}}/>
            </div>
            </div>
        </div>
    );
};

export default Chantier_Existant;