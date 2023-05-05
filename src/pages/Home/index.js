import './index.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


function Home() {
    

    return (
        <div className="home-container" >
            <Header />
            <div className='home-content'>
                <Link to="/createproject" className='Create'>
                    <Button className = 'btn-home-newWorksite' value = 'New worksite'/>
                </Link>
                <Link to="/chantier_existant/" className='Chantier_Existant'>
                    <Button className = 'btn-home-existingWorksite' value = 'Existing worksite'/>
                </Link>
            </div>
        </div>
    );
}

export default Home;