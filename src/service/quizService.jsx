import axios from 'axios';

const API_URL = "/api";

export const fetchQuizData = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error fetching quiz data:", error);
    return [];
    }
};