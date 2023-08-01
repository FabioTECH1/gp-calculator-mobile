import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';
const TOKEN_KEY = 'token';


export async function getDataPlan(network: string): Promise<any> {
    const token = localStorage.getItem(TOKEN_KEY);
    try {
        const response = await axios.get(`${API_BASE_URL}/datasub/getplan`, {
            params: {
                network: network,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // console.log(response.data);
        return response.data;
    } catch (error: any) {
        console.log(error.response.data);
        throw error.response.data;
    }
}


// export async function getBalance(): Promise<any> {
//     const token = localStorage.getItem(TOKEN_KEY);
//     try {
//         const response = await axios.get(`${API_BASE_URL}/get-balance`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return response.data;
//     } catch (error: any) {
//         console.log(error);
//         return error.data

//     }
// }
