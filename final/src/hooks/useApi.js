import { useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const useApi = () => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const apiCall = async ({ url, method, data = null }) => {
        try {
            const response = await axiosInstance({
                url,
                method,
                data
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    console.log('error')
                    setUser(null);
                    navigate('/login')

                } else if (error.response.status === 403) {
                    console.log('Foribidden Access')
                }
            }
            throw error;
        }
    };

    return { apiCall };
};

export default useApi;