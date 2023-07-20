
import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8000/api';
const TOKEN_KEY = 'token';

export interface IUser {
    name: String;
    role: String;
    success: Boolean;
}


export async function getUser(): Promise<IUser> {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
        const response = await axios.get(`${API_BASE_URL}/get_user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const user = response.data;
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
        return { name: "", role: "", success: false }

    }
}