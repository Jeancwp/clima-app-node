const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=af1a0a7f39aa4ad90d6d9fa14ce9cb82&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}