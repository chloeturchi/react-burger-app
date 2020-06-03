import axios from 'axios';
import apiConfig from './apiKeys'

const instance = axios.create({
    baseURL: `${apiConfig.firebaseKey}`
});

export default instance;