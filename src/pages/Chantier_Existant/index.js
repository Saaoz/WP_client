import './index.css';
import BuildingCard from '../../components/BuildingCard';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';

const Chantier_Existant = () => {
    const [ongoingProjects, setOngoingProjects] = useState([]);

    useEffect(() => {
        const fetchOngoingProjects = async () => {
            try {
                const response = await fetch('/api/work_sites/');
                if (response.ok) {
                    const projectsData = await response.json();
                    setOngoingProjects(projectsData.slice(-3).reverse());
                } else {
                    console.error('Erreur lors de la récupération des chantiers en cours');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des chantiers en cours :', error);
            }
        };

        fetchOngoingProjects();
    }, []);

    return (
        <>
            <Header />
            <div className="existing-site-page">
                <div className="existing-site-container">
                    <h1>Chantiers en cours :</h1>
                    <div className="last-worksite">
                        {ongoingProjects.map((project) => (
                            <BuildingCard dataBuilding={{ name: project.name, id: project.id }} key={project.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chantier_Existant;
