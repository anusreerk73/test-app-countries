import axios from 'axios';

let APIURL
 APIURL = 'https://restcountries.com/v2/';


const api = axios.create({
    baseURL:`${APIURL}`,
});

export default api;
