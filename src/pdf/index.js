import { Document, Page, Text, View } from "@react-pdf/renderer"

const HelloWordPDF = () => {
    return (
    <Document>
        <Page size="A4" pageNumber={1}>
            <View> 
                <Text>Hello World</Text>
            </View>
        </Page>
    </Document>
    );
};

export default HelloWordPDF;