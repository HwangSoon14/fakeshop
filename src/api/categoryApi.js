import axiosClient from "./axiosClient";

const categoryApi = {
    getAllCategory(){
        const url = '/products/categories';
        return axiosClient.get(url);
    },
    // getSingleCategory(cate){
    //     const url = `/products/category/${cate}`;
    //     return axiosClient.get(url);
    // }
   }
   export default categoryApi;