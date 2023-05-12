import './index.css';
import { Document,Image, Page, Text, View } from "@react-pdf/renderer";

// import des jpg
import bib1cotation from '../sources/imgs/bib1cotation.jpg';
import bib2cotation from '../sources/imgs/bib2cotation.jpg';
import bib3cotation from '../sources/imgs/bib3cotation.jpg';
import coif1cotation from '../sources/imgs/coif1cotation.jpg';
import coif2cotation from '../sources/imgs/coif2cotation.jpg';
import coif3cotation from '../sources/imgs/coif3cotation.jpg';


const HelloWordPDF = ({data, worksite, cdt}) => {

    const getImageForCategory = (category) => {
        switch (category) {
            case "Bavette 3 plis avec goutte d'eau externe":
                return bib1cotation
            case "Bavette 3 plis avec goutte d'eau interne":
                return bib2cotation;
            case "Bavette 2 plis sans goutte d'eau":
                return bib3cotation;
            case "Couvertine 5 plis avec goutte d'eau externe":
                return coif1cotation;
            case "Couvertine 5 plis avec goutte d'eau interne":
                return coif2cotation;
            default:
                return coif3cotation;
        };
    };

    const getStyleDim1 = (category) => {
        switch (category) {
            case "Bavette 3 plis avec goutte d'eau externe":
                return {position: "absolute", top: "125px", right: "55px", textAlign: "center"};
            case "Bavette 3 plis avec goutte d'eau interne":
                return {position: "absolute", top: "125px", right: "62px", textAlign: "center"};
            case "Bavette 2 plis sans goutte d'eau":
                return {position: "absolute", top: "125px", right: "62px", textAlign: "center"};
            case "Couvertine 5 plis avec goutte d'eau externe":
                return {position: "absolute", top: "205px", right: "43px", textAlign: "center"};
            case "Couvertine 5 plis avec goutte d'eau interne":
                return {position: "absolute", top: "210px", right: "43px", textAlign: "center"};
            default:
                return {position: "absolute", top: "210px", right: "43px", textAlign: "center"};
        };
    };

    const getStyleDim2 = (category) => {
        switch (category) {
            case "Bavette 3 plis avec goutte d'eau externe":
                return {position: "absolute", top: "90px", right: "110px", textAlign: "center"};
            case "Bavette 3 plis avec goutte d'eau interne":
                return {position: "absolute", top: "90px", right: "118px", textAlign: "center"};
            case "Bavette 2 plis sans goutte d'eau":
                return {position: "absolute", top: "90px", right: "115px", textAlign: "center"};
            case "Couvertine 5 plis avec goutte d'eau externe":
                return {position: "absolute", top: "177px", right: "10px", textAlign: "left"};
            case "Couvertine 5 plis avec goutte d'eau interne":
                return {position: "absolute", top: "182px", right: "10px", textAlign: "left"};
            default:
                return {position: "absolute", top: "182px", right: "10px", textAlign: "left"};
        };
    };

    const getStyleDim3 = (category) => {
        switch (category) {
            case "Bavette 3 plis avec goutte d'eau externe":
                return {position: "absolute", top: "180px", left: "55px", textAlign: "right"};
            case "Bavette 3 plis avec goutte d'eau interne":
                return {position: "absolute", top: "180px", left: "65px", textAlign: "right"};
            case "Bavette 2 plis sans goutte d'eau":
                return {position: "absolute", top: "182px", left: "65px", textAlign: "right"};
            case "Couvertine 5 plis avec goutte d'eau externe":
                return {position: "absolute", top: "147px", right: "10px", textAlign: "left"};
            case "Couvertine 5 plis avec goutte d'eau interne":
                return {position: "absolute", top: "150px", right: "10px", textAlign: "left"};
            default:
                return {position: "absolute", top: "147px", right: "10px", textAlign: "left"};
        };
    };

    const getStyleDim4 = (category) => {
        switch (category) {
            case "Bavette 3 plis avec goutte d'eau externe":
                return {position: "absolute", top: "212px", right: "119px", textAlign: "center", transform: "rotate(-38deg)"};
            case "Bavette 3 plis avec goutte d'eau interne":
                return {position: "absolute", top: "212px", right: "122px", textAlign: "center", transform: "rotate(-30deg)"};
            case "Bavette 2 plis sans goutte d'eau":
                return {display: "none"};
            case "Couvertine 5 plis avec goutte d'eau externe":
                return {position: "absolute", top: "100px", right: "125px", textAlign: "center", transform: "rotate(-7deg)"};
            case "Couvertine 5 plis avec goutte d'eau interne":
                return {position: "absolute", top: "100px", right: "125px", textAlign: "center", transform: "rotate(-7deg)"};
            default:
                return {position: "absolute", top: "100px", right: "125px", textAlign: "center", transform: "rotate(-7deg)"};
        };
    };

    const getStyleDim5 = (category) => {
        switch (category) {
            case "Bavette 3 plis avec goutte d'eau externe":
                return {display: "none"};
            case "Bavette 3 plis avec goutte d'eau interne":
                return {display: "none"};
            case "Bavette 2 plis sans goutte d'eau":
                return {display: "none"};
            case "Couvertine 5 plis avec goutte d'eau externe":
                return {position: "absolute", top: "157px", left: "10px", textAlign: "right"};
            case "Couvertine 5 plis avec goutte d'eau interne":
                return {position: "absolute", top: "165px", left: "10px", textAlign: "right"};
            default:
                return {position: "absolute", top: "165px", left: "10px", textAlign: "right"};
        };
    };

    const getStyleDim6 = (category) => {
        switch (category) {
            case "Bavette 3 plis avec goutte d'eau externe":
                return {display: "none"};
            case "Bavette 3 plis avec goutte d'eau interne":
                return {display: "none"};
            case "Bavette 2 plis sans goutte d'eau":
                return {display: "none"};
            case "Couvertine 5 plis avec goutte d'eau externe":
                return {position: "absolute", top: "208px", left: "44px", transform: "rotate(-40deg)", textAlign: "center"};
            case "Couvertine 5 plis avec goutte d'eau interne":
                return {position: "absolute", top: "205px", left: "57px", transform: "rotate(-40deg)", textAlign: "center"};
            default:
                return {display: "none"};
        };
    };

    return (
        // le document représente la balise body en html
        <Document>
        {/* la page représente l'étiquette de la page */}
        <Page 
            size="A4"
            style={{ 
                width: "100%",
                padding: "10px",
                paddingTop: "70px",
                fontSize: "12px",}}
            >
            <View style={{ 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                margin: "25px",
                marginTop: "-30px",
                marginBottom: "30px",
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
                gap: "35px"
                }}>
            {/* je map pour avoir les données par pliage */}
            {data.map((item, index) => {
                const image = getImageForCategory(item.category);
                const styleDim1 = getStyleDim1(item.category);
                const styleDim2 = getStyleDim2(item.category);
                const styleDim3 = getStyleDim3(item.category);
                const styleDim4 = getStyleDim4(item.category);
                const styleDim5 = getStyleDim5(item.category);
                const styleDim6 = getStyleDim6(item.category);

                return (// le view représente un bloc de donnée pour la mise en page des différents pliages
                <View key={index} style={{ width: "250px", height: "350px", border: "1px solid black", position: "relative" }}>
                    <Text style={{ border: '1px solid black', padding: '5px'}}>
                        Ref: {item.identification}
                    </Text>
                    <Image src={image} style={{ padding: "30px", width: "250px", marginTop: "20px"}}/>
                    <View style={{ display: "flex", flexDirection: "row",justifyContent: "space-between",alignItems: "center", border: '1px solid black', padding: '5px'}}>
                        <Text>
                            Type: {item.type}
                        </Text>
                        <Text>
                            RAL: {item.ral}
                        </Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row",justifyContent: "space-between",alignItems: "center", border: '1px solid black', padding: '5px'}}>
                        <Text>
                            Epaisseur: {item.thickness}/100
                        </Text>
                        <Text>
                            Développé: {item.dev}
                        </Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row",justifyContent: "space-between",alignItems: "center", border: '1px solid black', padding: '5px'}}>
                        <Text>
                            Qantité: {item.quantity}
                        </Text>
                        <Text>
                            Longueur: {item.length}
                        </Text>
                    </View>
                    {/* les dimensions */}
                    <Text style={styleDim1}>
                        {item.dim1}
                    </Text>
                    <Text style={styleDim2}>
                        {item.dim2}
                    </Text>
                    <Text style={styleDim3}>
                        {item.dim3}
                    </Text>
                    <Text style={styleDim4}>
                        {item.dim4}
                    </Text>
                    <Text style={styleDim5}>
                        {item.dim5}
                    </Text>
                    <Text style={styleDim6}>
                        {item.dim6}
                    </Text>
                    {/* angles */}
                    <Text style={{position: "absolute", left: "-2010px"}}>
                        {item.angle1}
                    </Text>
                    <Text style={{position: "absolute", left: "-2010px"}}>
                        {item.angle2}
                    </Text>
                    <Text style={{position: "absolute", left: "-2010px"}}>
                        {item.angle3}
                        </Text>
                    <Text style={{position: "absolute", left: "-2010px"}}>
                        {item.angle4}
                    </Text>
                    <Text style={{position: "absolute", left: "-2010px"}}>
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