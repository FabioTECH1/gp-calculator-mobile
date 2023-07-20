// AuthService.ts
import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';
const EMAIL = 'email';
const TOKEN_KEY = 'token';
const EXPIRATION_KEY = 'expiration';

export async function register(firstname: string, middlename: string, lastname: string,
    email: string, username: string, referral: string, password: string): Promise<boolean> {
    localStorage.setItem(EMAIL, email);
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
            email,
            username,
            firstname,
            middlename,
            lastname,
            referral,
            password,
        });
        return true; // next to otp page 
    } catch (error: any) {
        console.error(error.response.data);
        return false;
    }
}

export async function verify(otp: string): Promise<boolean> {
    const email = localStorage.getItem(EMAIL);
    try {
        const response = await axios.post(`${API_BASE_URL}/verify`, {
            otp,
            email
        });
        console.log(response.data);

        const auth_token: string = response.data.token;
        const separatorIndex = auth_token.indexOf("|");
        const token = auth_token.substring(separatorIndex + 1);
        const expiration = Date.now() + 3600 * 1000; // One hour expiration time
        console.log(token);
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(EXPIRATION_KEY, expiration.toString());
        return true; // next to otp page 
    } catch (error: any) {
        console.error(error.response.data);
        return false;
    }
}

export async function resend_otp(): Promise<boolean> {
    const email = localStorage.getItem(EMAIL);
    try {
        const response = await axios.post(`${API_BASE_URL}/resend-otp`, {
            email
        });
        console.log(response.data);
        return true; // next to otp page 
    } catch (error: any) {
        console.error(error.response.data);
        return false;
    }
}