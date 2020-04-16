import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7ca77.firebaseio.com/'
});

export default instance;