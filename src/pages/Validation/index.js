import { PDFDownloadLink } from '@react-pdf/renderer';
import './index.css'
import PdfDocument from '../../pdf';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Validation = () => {
    const navigate = useNavigate();
    
    return (
        <div className='validation-page'>
            <div className='validation-container'>
                <PDFDownloadLink
                    document={<PdfDocument />}
                    fileName="test.pdf"
                >
                    {({ loading, error }) => loading ? 'Loading document...' : 'Download PDF'}
                </PDFDownloadLink>
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

    );
};

export default Validation;