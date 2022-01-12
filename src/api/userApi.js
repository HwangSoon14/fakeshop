import axiosClient from "./axiosClient";


const userApi = {
    login(data)
    {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDm-JPWiXhA3sm3ZT_NKqFfYgSKCHVcRSk';
        return axiosClient.post(url,data);
    },

    register(data)  
    {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDm-JPWiXhA3sm3ZT_NKqFfYgSKCHVcRSk';
        return axiosClient.post(url,data);
    },

};
export default userApi;