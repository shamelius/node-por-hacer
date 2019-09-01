
const argv = require('yargs')
        .command('crear','Crear un elemento por hacer',
            {descripcion: {
                demand: true,
                alias: 'd',
                desc: "Descripcion de la tarea por hacer"
            }})
            .command('actualizar','Actualiza el estado completo de una tarea',
            {descripcion: {
                demand: true,
                alias: 'd',
                desc: "Descripcion de la tarea por hacer"
            }
            ,completado: {
                alias: 'c',
                default: true,
                desc: "Marca como terminado o pendiente la tarea."
               }
            })
            .command('borrar','Borrar tarea en base de datos',
            {descripcion: {
                demand: true,
                alias: 'd',
                desc: "Descripcion de la tarea por hacer"
            }
            })
        .help()
        .argv;


        module.exports = {
            argv

        }


