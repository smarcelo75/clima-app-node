const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad42c59637f65ae63e1b8c297c8d2b1e&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}