
import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8000/api';
const TOKEN_KEY = 'token';


export async function getUser(): Promise<any> {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
        const response = await axios.get(`${API_BASE_URL}/get_user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        console.log(error);
        return error.data

    }
}