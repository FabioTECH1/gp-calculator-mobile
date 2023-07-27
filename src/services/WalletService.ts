import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';
const TOKEN_KEY = 'token';

export async function addToWallet(amount: number): Promise<any> {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
        const response = await axios.post(
            `${API_BASE_URL}/addfund/card`,
            {
                amount: amount,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        console.log(error.data);
        return error.data;
    }
}

export async function getBalance(): Promise<any> {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
        const response = await axios.get(`${API_BASE_URL}/get-balance`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        console.log(error);
        return error.data

    }
}
