import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export { API_BASE_URL };

export const fetchPostBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/posts/${slug}`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching post by slug:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchAllPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/posts`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all posts:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchSearchPost = async (query) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/posts/search/${encodeURIComponent(query)}`);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message || 'Error fetching posts');
        }

        return data.data || [];
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching posts:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchPostByYear = async (year) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/posts/archive/${year}`);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message || 'Error fetching posts');
        }

        return data.data || [];
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching posts:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchArtists = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/artists`);
        return response.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching artists:", errorMessage);
        throw new Error(errorMessage);
    }
};