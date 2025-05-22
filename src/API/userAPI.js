
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;



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
export const fetchProductsDataByGender = async (id, setFetchProductsData) => {
    try {
        const result = await axios.get(`${BASE_URL}products/by-gender/?gender=${id}`);
        // console.log('fetchproducts',result.data);

        setFetchProductsData(result.data);

    } catch (error) {
        console.log(error);

    }
}


// Related Products
export const fetchRelatedProductsData = async (setFetchRelatedProductsData) => {
    try {
        const result = await axios.get(`${BASE_URL}products/recommend/`)
        setFetchRelatedProductsData(result.data)
    } catch (error) {
        console.log(error);
    }
}

// Search Products
export const getSearchProducts = async (value) => {
    try {
        const result = await axios.get(`${BASE_URL}products/search/?q=${value}`)
        // console.log('resss',result);

        return result.data
    } catch (error) {
        console.log(error);
    }
}

// filtered products by category - product listing page
export const fetchProductsDataByCategory = async (id, setFetchProductsData) => {
    try {
        const result = await axios.get(`${BASE_URL}categories/seven/${id}`);
        setFetchProductsData(result.data);
    } catch (error) {
        console.log(error);

    }
}



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

export const fetchHeaderData = async (setFetchedData) => {
    try {
        const result = await axios.get(`${BASE_URL}headers/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
}


export const fetchNavCategory = async (setFetchedData) => {
    try {
        const result = await axios.get(`${BASE_URL}navbar-categories/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
}

export const fetchNavMegaData = async (setFetchedData) => {
    try {
        const result = await axios.get(`${BASE_URL}navbar-categories/`);
        setFetchedData(result.data);
    } catch (error) {
        console.log(error);
    }
}

// product details 
export const fetchProductsDetails = async (id, setFectchProductsDetailsData) => {
    try {
        const result = await axios.get(`${BASE_URL}products/${id}`)
        setFectchProductsDetailsData(result.data)
    } catch (error) {
        console.log(error);
    }
}