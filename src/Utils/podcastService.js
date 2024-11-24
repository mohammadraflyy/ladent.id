import axios from 'axios';
import config from './config';

const { API_BASE_URL } = config;

export const fetchAllPodcasts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/podcasts`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all podcasts:", errorMessage);
        throw new Error(errorMessage);
    }
}