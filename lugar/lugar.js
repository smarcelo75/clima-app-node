const axios = require('axios');

const getLugarLatLng = async(nombreLugar) => {
    const encodeURL = encodeURI(nombreLugar);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
        timeout: 3000,
        headers: { 'x-rapidapi-key': '1bf2ddd012msh5a793319c944827p10fa82jsn4c0f947ba920' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay datos disponibles para ${nombreLugar} !!!`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}