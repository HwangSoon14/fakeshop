import axiosClient from "./axiosClient";

const productApi = {
    getAll(){
        const url = '/products';
        return axiosClient.get(url);
    },
    getSortProduct() 
    {
        const url = `/products?sort=desc`
        return axiosClient.get(url); 
    },
    getProductById(id) {
        const url = `/products/${id}`
        return axiosClient.get(url)
    },
   
   }
   export default productApi;