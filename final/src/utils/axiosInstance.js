


const axiosInstance = axios.create({
    withCredentials:true,
    baseURL : `${process.env.REACT_APP_BACKEND}`

})


export default axiosInstance;