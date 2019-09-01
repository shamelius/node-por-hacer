//const argv = require('yargs').argv;
// const argv = require('./config/yargs').argv;
const {argv} = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');
//const {getListado} = require('./por-hacer/por-hacer').getListado;


//console.log(argv);

let comando = argv._[0];

switch (comando) {
        case 'crear':
            //console.log('Proceso para crear');
        
            porHacer.crear(argv.descripcion);

            //console.log(tarea);
        break;
        
        case 'listar':
            console.log('Proceso listar'); 
            let listado = porHacer.getListado();

            for(let tarea of listado){

                console.log('===========por hacer==============='.green);
                console.log(tarea.descripcion);
                console.log('Estado :', tarea.completado);
                console.log('===================================='.green);

            }
            
            
        break;
            
         case 'actualizar':
            console.log('Proceso para actualizar');  
            let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);         
            console.log(actualizado);    
        break;

        case 'borrar':
            console.log('Proceso para eliminar');
            let borrado = porHacer.borrar(argv.descripcion);

            console.log(borrado);


        break;
            
        default:
            console.log('Comando no valido');
        break;
}


