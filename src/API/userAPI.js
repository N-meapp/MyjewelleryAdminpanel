import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Contact Details
export const fetchContactdata  = async (setFetchedData) => {
  try {
    const result = await axios.get(`${BASE_URL}contact/`);
    // console.log('contact',result);
    
     setFetchedData(result.data);
  } catch (error) {
     console.log(error);
  }
}

// Category Tab 
export const fetchGenderData = async (setFetchGenderData) => {
    try {
        const result = await axios.get(`${BASE_URL}genders/`);
        setFetchGenderData(result.data);
    } catch (error) {
        console.log(error);
        
    }
}

// filtered products by gender - category page
export const fetchProductsDataByGender = async (id,setFetchProductsData) => {
    try {
        const result = await axios.get(`${BASE_URL}products/by-gender/?gender=${id}`);
        // console.log('fetchproducts',result.data);
        
        setFetchProductsData(result.data);
        
    } catch (error) {
        console.log(error);
        
    }
}


// Related Products
export const fetchRelatedProductsData = async(setFetchRelatedProductsData)=> {
    try {
        const result = await axios.get(`${BASE_URL}products/recommend/`)        
        setFetchRelatedProductsData(result.data)
    } catch (error) {
         console.log(error);
    }
}

// Search Products
export const getSearchProducts = async(value)=> {
    try {
        const result = await axios.get(`${BASE_URL}products/search/?q=${value}`)     
        // console.log('resss',result);
           
        return result.data
    } catch (error) {
         console.log(error);
    }
}

// filtered products by category - product listing page
export const fetchProductsDataByCategory =async(id,setFetchProductsData)=>{
    try {
        const result = await axios.get(`${BASE_URL}categories/seven/${id}`);
         setFetchProductsData(result.data);
    } catch (error) {
        console.log(error);
        
    }
}