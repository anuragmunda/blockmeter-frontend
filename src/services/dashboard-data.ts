import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchGasPrice = async (chainId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/gas-price/${chainId}`);
        if (response.status !== 200) {
            throw new Error(`Error fetching gas price: ${response.statusText}`);
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error;
    }
};

export const fetchGasPriceHistory = async (chainId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/gas-price/history/${chainId}`);
        if (response.status !== 200) {
            throw new Error(`Error fetching gas price: ${response.statusText}`);
        }
        return response.data.candles;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error;
    }
};