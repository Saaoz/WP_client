// get all worksmanagers data

export const getWorksmanagersData = async () => {
    try {
        const response = await fetch(`/api/works_managers`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error fetch works_managers", error);
        throw error; // Vous pouvez gérer l'erreur selon vos besoins
    }
};

// export const getWorksmanagersData = async () => {
    
//     var worksmanagersData;
//     //déclaration d'un constante response de type fetch de type async
//     fetch(`/api/works_managers`)
//     .then ((response) => response.json())
//     .then ((data) => { worksmanagersData = data})
//     .catch(() => console.log("error fetch works_managers"))
//     return worksmanagersData;

// };