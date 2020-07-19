import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-2557b.firebaseio.com/'
});

export default instance;
