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
    addProductToServe()
    {
        const url =`/products`;
        return axiosClient.post(url, JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        ))
    }
   }
   export default productApi;