// get all Foldings by one order sheet
export const getFoldingsData = async (order_sheet_id) => {
    try {
        //déclaration d'un constante response de type fetch de type async
        const response = await fetch(`http://localhost:8080/api/foldings/order_sheet/${order_sheet_id}`);
        //déclaration d'une constante offers qui attend une reponse de type jsoon
        const offers = await response.json();
        //je retourne le offers
        return offers;
    } catch (error) {
        //en cas d'erreur je retourne null et je console.error
        console.error("error", error);
        return null;
    }
};