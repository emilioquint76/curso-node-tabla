
//const { argv, option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//const colors = require ('colors');//pero puede ir de otra manera
require ('colors');


console.clear();

//console.log( process.argv);
//console.log( argv );// para ver lo que trae el yargs
//console.log('base: yargs', argv.b);
/*const[ , , arg3 = 'base=5']=process.argv;
const[ , base = 5 ]= arg3.split('=');*/
// tabla del 5
//const base = 9;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))
