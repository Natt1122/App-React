import axios from "axios";



const API_URL= 'https://api-colombia.com/api/v1'


//get info Colombia
export const getColombiaInfo = async () =>{
    const response = await axios.get(`${API_URL}/Country/Colombia`);
    return response.data;
}

//get info Colombia region
export const getRegionesColombia = async () =>{
    const response = await axios.get(`${API_URL}/Region`);
    return response.data;
}

//get info especific Colombia Region
export const getDepartments = async id =>{
    const response = await axios.get(`${API_URL}/Department`);
    return response.data;
}