import { PDFViewer } from '@react-pdf/renderer';
import './index.css'
import HelloWordPDF from '../../pdf';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

const Validation = () => {
    const navigate = useNavigate();
    
    const data = [
        {
            "id": 1,
            "identification": "A",
            "category": "Bavette",
            "type": "Acier",
            "ral": 2653,
            "thickness": 12421,
            "quantity": 4,
            "length": 546,
            "dim1": 654,
            "dim2": 657,
            "dim3": 531,
            "dim4": 1256,
            "dim5": null,
            "dim6": null,
            "dev": 353423,
            "angle1": 321,
            "angle2": 321,
            "angle3": null,
            "angle4": null,
            "angle5": null,
            "order_sheet_id": 1
        },
        {
            "id": 11,
            "identification": "A",
            "category": "Bavette 3 plis avec goutte d'eau externe",
            "type": "ACIER",
            "ral": 9010,
            "thickness": 75,
            "quantity": 5,
            "length": 4000,
            "dim1": 50,
            "dim2": 40,
            "dim3": 30,
            "dim4": 10,
            "dim5": null,
            "dim6": null,
            "dev": 130,
            "angle1": null,
            "angle2": null,
            "angle3": null,
            "angle4": null,
            "angle5": null,
            "order_sheet_id": 1
        },
        {
            "id": 12,
            "identification": "A",
            "category": "Bavette 3 plis avec goutte d'eau externe",
            "type": "ACIER",
            "ral": 7016,
            "thickness": 75,
            "quantity": 16,
            "length": 4000,
            "dim1": 40,
            "dim2": 10,
            "dim3": 50,
            "dim4": 10,
            "dim5": null,
            "dim6": null,
            "dev": 110,
            "angle1": null,
            "angle2": null,
            "angle3": null,
            "angle4": null,
            "angle5": null,
            "order_sheet_id": 1
        },
        {
            "id": 13,
            "identification": "A",
            "category": "Bavette 3 plis avec goutte d'eau externe",
            "type": "ACIER",
            "ral": 9010,
            "thickness": 75,
            "quantity": 6,
            "length": 4000,
            "dim1": 40,
            "dim2": 10,
            "dim3": 50,
            "dim4": 10,
            "dim5": null,
            "dim6": null,
            "dev": 110,
            "angle1": null,
            "angle2": null,
            "angle3": null,
            "angle4": null,
            "angle5": null,
            "order_sheet_id": 1
        },
        {
            "id": 14,
            "identification": "A",
            "category": "Bavette 2 plis sans goutte d'eau",
            "type": "ACIER",
            "ral": 10,
            "thickness": 75,
            "quantity": 10,
            "length": 4000,
            "dim1": 40,
            "dim2": 10,
            "dim3": 50,
            "dim4": null,
            "dim5": null,
            "dim6": null,
            "dev": 100,
            "angle1": null,
            "angle2": null,
            "angle3": null,
            "angle4": null,
            "angle5": null,
            "order_sheet_id": 1
        },
        {
            "id": 15,
            "identification": "A",
            "category": "Couvertine 5 plis avec goutte d'eau externe",
            "type": "ACIER",
            "ral": 9010,
            "thickness": 75,
            "quantity": 5,
            "length": 4000,
            "dim1": 20,
            "dim2": 20,
            "dim3": 50,
            "dim4": 10,
            "dim5": null,
            "dim6": null,
            "dev": 160,
            "angle1": null,
            "angle2": null,
            "angle3": null,
            "angle4": null,
            "angle5": null,
            "order_sheet_id": 1
        },
        {
            "id": 16,
            "identification": "A",
            "category": "Couvertine 5 plis avec goutte d'eau interne",
            "type": "ACIER",
            "ral": 77,
            "thickness": 75,
            "quantity": 7,
            "length": 4000,
            "dim1": 20,
            "dim2": 20,
            "dim3": 50,
            "dim4": 40,
            "dim5": 50,
            "dim6": 10,
            "dev": 190,
            "angle1": null,
            "angle2": null,
            "angle3": null,
            "angle4": null,
            "angle5": null,
            "order_sheet_id": 1
        }
    ];

    const worksite ="Bâtiment A";
    const cdt = "Jhon";

    return (
        <div className='validation-page'>
                <Header/>
            <div className='validation-container'>
                <h2>Récapitulatif de la demande de prix</h2>
            </div>
            <div className='validation-container'>
                <PDFViewer className='pdf-viewer'>
                    <HelloWordPDF data={data} worksite={worksite} cdt={cdt}/>
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