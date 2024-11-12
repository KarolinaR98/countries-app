import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

const getAllCountries = () => {
    return axios
    .get(`${API_URL}/all`)
    .then((res) => res.data)
    .catch((error) => {
        console.error(error);
    })
}

export default {getAllCountries};