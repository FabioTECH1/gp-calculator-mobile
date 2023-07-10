
import axios from 'axios';
const API_BASE_URL = 'https://hotel.fottify.com/api';
const TOKEN_KEY = 'token';

export async function getUser(): Promise<void> {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
        const response = await axios.post(`${API_BASE_URL}/get_user`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const user = response.data;
        console.log(user);
        return user;
    } catch (error) {
        console.error(error);
    }

}