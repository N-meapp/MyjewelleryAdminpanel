import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL ;


// contact data feching
export const fetchContactData = async (setFetchedData) => {
    try {
        const result = await axios.get(`${BASE_URL}contact/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);  
    }
};


// Home Explore Our Finest Creations
export const fetchHomeCategory = async (setFetchedData) => {
    try {
        const result = await axios.get(`${BASE_URL}categories/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);  
    }
};



export const newArrivalsFetching = async (setFetchedData) => {
    try {
        const result = await axios.get(`${BASE_URL}products/recent-with-fallback/`);
        setFetchedData(result.data.products);
    } catch (error) {
        console.log(error);  
    }
};


export const fetchingClassicCollections = async (setFetchedData) => {   
    try {
        const result = await axios.get(`${BASE_URL}products/classic/`);
        setFetchedData(result.data.classic_products);
    } catch (error) {
        console.log(error);  
    }
};

export const fetchHeaderData = async (setFetchedData)=>{
   try {
    const result = await axios.get(`${BASE_URL}headers/`);
    setFetchedData(result.data);
   } catch (error) {
    console.log(error);
   }
}


export const fetchNavCategory = async (setFetchedData)=>{
    try {
     const result = await axios.get(`${BASE_URL}navbar-categories/`);
     setFetchedData(result.data);
    } catch (error) {
     console.log(error);
    }
 }

 export const fetchNavMegaData = async (setFetchedData)=>{
    try {
     const result = await axios.get(`${BASE_URL}navbar-categories/`);
     setFetchedData(result.data);
    } catch (error) {
     console.log(error);
    }
 }