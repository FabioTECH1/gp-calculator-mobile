// AuthService.ts
import axios from 'axios';

const API_BASE_URL = 'https://hotel.fottify.com/api';
const TOKEN_KEY = 'token';
const EXPIRATION_KEY = 'expiration';

export async function login(email: string, password: string): Promise<boolean> {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            password,
        });

        const token: string = response.data.token;
        const expiration = Date.now() + 3600 * 1000; // One hour expiration time

        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(EXPIRATION_KEY, expiration.toString());

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout(): Promise<void> {
    const token = localStorage.getItem(TOKEN_KEY);

    try {
        await axios.post(`${API_BASE_URL}/logout`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(EXPIRATION_KEY);
    } catch (error) {
        console.error(error);
    }

}
export function isAuthenticated(): boolean {
    // Check if a valid authentication token exists in storage and if it has expired
    const token = localStorage.getItem(TOKEN_KEY);
    const expiration = localStorage.getItem(EXPIRATION_KEY);
    if (token && expiration) {
        const expirationTimestamp = parseInt(expiration, 10);
        return expirationTimestamp > Date.now();
    }
    return false;
}