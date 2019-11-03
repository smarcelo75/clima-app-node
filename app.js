const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.descripcion)
//     .then(console.log)

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        console.log(`La temperatura de ${coordenadas.direccion} es de ${temperatura}`);
    } catch (error) {
        console.log(`No se pudo obtenere la temperatura de ${direccion}`);
    }
}

getInfo(argv.descripcion);