import { PDFViewer } from '@react-pdf/renderer';
import './index.css'
import HelloWordPDF from '../../pdf';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { getFoldingsData } from '../../api/foldings';
import { useLocation } from 'react-router-dom';

const Validation = () => {
    const navigate = useNavigate();

        // récupération ID
        const location = useLocation();

        const searchParams = new URLSearchParams(location.search);
        const projectIdFromUrl = searchParams.get('projectId');
        const projectId = projectIdFromUrl || location.state?.projectId;
    
        const projectNameFromUrl = searchParams.get('projectName');
        const projectName = projectNameFromUrl || location.state?.projectName;
    
        if (projectId && projectId !== projectIdFromUrl) {
            searchParams.set('projectId', projectId);
            navigate(`?${searchParams.toString()}`);
        }
    
        if (projectName && projectName !== projectNameFromUrl) {
            searchParams.set('projectName', projectName);
            navigate(`?${searchParams.toString()}`);
        }

        //récupération des données de tous les pliages pour une ordersheet
    const [foldingData, setFoldingData] = useState([]);

    useEffect(() => {
        //fonction de nom getOffer de type async pour surveillé la constante response appelant la fonction getOffers
        const getfoldingData = async () => {
            const response = await getFoldingsData(projectId);
             //mise à jour de offer
            setFoldingData(response);
        };
        //execution des functions en fin de useEffect
        getfoldingData();
    },[]);

    const worksite = projectName;
    const cdt = "Jhon";

    return (
        <div className='validation-page'>
                <Header/>
            <div className='validation-container'>
                <h2>Récapitulatif de la demande de prix</h2>
            </div>
            <div className='validation-container'>
                <PDFViewer className='pdf-viewer'>
                    <HelloWordPDF data={foldingData} worksite={worksite} cdt={cdt}/>
                </PDFViewer>
            </div>

            <Button 
                    className='btn1' 
                    value='Terminer' 
                    onClick={() => navigate('/')} 
            />

        </div>

//pour avoir le pdf en lecture à l'écran
    // <PDFViewer className='pdf-viewer'>
    //   <PdfDocument />
    // </PDFViewer>

//pour création du téléchargement
// <PDFDownloadLink
// document={<PdfDocument />}
// fileName="test.pdf"
// >
// {({ loading, error }) => loading ? 'Loading document...' : 'Download PDF'}
// </PDFDownloadLink>

    );
};

export default Validation;