// Nos permite recibir opciones sin definir comandos.
const argv = require('yargs').options({
        descripcion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima.',
            require: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}