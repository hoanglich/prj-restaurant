import axios from "axios";

export const httpRequest = axios.create({
    baseURL: 'https://63413dec16ffb7e275ccf460.mockapi.io/api/',
    timeout: 2000,
    headers: {
        'Create-api': 'application/json'
    }
  });