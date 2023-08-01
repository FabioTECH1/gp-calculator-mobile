// AuthService.ts
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';
const TOKEN_KEY = 'token';
const EXPIRATION_KEY = 'expiration';

export async function login(inputValue: string, password: string): Promise<any> {
    let email = null;
    let username = null;

    if (inputValue.includes('@')) {
        email = inputValue;
    } else {
        username = inputValue;
    }
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            email: email,
            username: username,
            password: password,
        });
        console.log(response.data);
        const auth_token: string = response.data.token;
        const separatorIndex = auth_token.indexOf("|");
        const token = auth_token.substring(separatorIndex + 1);
        const expiration = Date.now() + 3600 * 10000; // 10 hour expiration time
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(EXPIRATION_KEY, expiration.toString());
        return response.data;
    } catch (error: any) {
        if (error.response == undefined) {
            return 'Something went wrong, check your internet connection'
        }
        console.error(error.response.data);
        return error.response.data.message;
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
