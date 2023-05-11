import './index.css';
import { Document,Image, Page, Text, View } from "@react-pdf/renderer";
import coifmorpion from '../sources/imgs/grattage_morpion.jpg';
import coif1cotation from '../sources/imgs/coif1cotation.jpg';

const HelloWordPDF = ({data, worksite, cdt}) => {


    return (
        // le document représente la balise body en html
        <Document>
        {/* la page représente l'étiquette de la page */}
        <Page 
            size="A4"
            style={{ 
                width: "100%",
                padding: "10px"}}
            >
            <View style={{ 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginBottom: "20px",
                gap: "20px"
                }}>
                    <Text>Référence chantier: {worksite}</Text>
                    <Text>Auteur: {cdt}</Text>
            </View>
                {/* view de mise en page */}
            <View style={{ 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                rowGap: "40px"
                }}>
            {/* je map pour avoir les données par pliage */}
            {data.map((item, index) => {
                const image = item.category==="Bavette" ? coif1cotation : coifmorpion ;

                return (// le view représente un bloc de donnée pour la mise en page des différents pliages
                <View key={index} style={{ width: "250px", border: "1px solid black" }}>
                    <Image src={image} style={{ padding: "20px" }}/>
                    <Text>
                        Ref: {item.identification}
                    </Text>
                    <Text>
                        Type: {item.type}
                    </Text>
                    <Text style={{ border: '1px solid black', padding: '5px'}}>
                        RAL: {item.ral}
                    </Text>
                    <Text>
                        Epaisseur: {item.thickness}/100
                    </Text>
                    <Text>
                        Qte: {item.quantity}
                    </Text>
                    <Text>
                        Longueur: {item.length}
                    </Text>
                    <Text>
                        {item.dim1}
                    </Text>
                    <Text>
                        {item.dim2}
                    </Text>
                    <Text>
                        {item.dim3}
                    </Text>
                    <Text>
                        {item.dim4}
                    </Text>
                    <Text>
                        {item.dim5}
                    </Text>
                    <Text>
                        {item.dim6}
                    </Text>
                    <Text>
                        {item.dev}
                    </Text>
                    <Text>
                        {item.angle1}
                    </Text>
                    <Text>
                        {item.angle2}
                    </Text>
                    <Text>
                        {item.angle3}
                        </Text>
                    <Text>
                        {item.angle4}
                    </Text>
                    <Text>
                        {item.angle5}
                    </Text>
                </View>
                );}
            )}
            </View>
        </Page>
    </Document>
    );
};

export default HelloWordPDF;