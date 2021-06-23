
//const { rejects } = require('assert');
const colors = require ('colors');
const fs = require('fs');
const crearArchivo =async (base = 5, listar = false, hasta =10 ) =>{
    try {
       
        
        let salida ='';
        let consola ='';
        for(let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);//la \n se ara un salto de linea cada vez que se ejecute la accion
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
        }
        if (listar){
            console.log('====================='.green);
            console.log('   Tabla del:', colors.red( base));
            console.log('====================='.green);
            console.log(consola);
        }
        
        /*fs.writeFile(`tabla-${ base }.txt`, salida, (err)=>{
            if (err) throw err;
            console.log(`tabla-${ base }.txt creado`);
        })*/
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }
       
    
}
module.exports={
    crearArchivo
}
