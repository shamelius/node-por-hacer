

const fs = require('fs');

let listadoPorhacer = [];

const guardarDB = ()=>{
    
    let data = JSON.stringify(listadoPorhacer);
    
    fs.writeFile('./db/data.json',data,(err)=>{
        
        if (err) throw new Error('no se puedo crear el file', err);
        //console.log(err);
        
    })
    
}

const cargaDB = ()=>{
    
    try {
        
        listadoPorhacer = require('../db/data.json');
        
    } catch (error) {
        
        let listadoPorhacer = [];
    }

     
}


const crear = (descripcion)=>{

    cargaDB();

    let porHacer = {
        descripcion,
        completado : false

    };

    listadoPorhacer.push(porHacer);

    console.log(listadoPorhacer);

    guardarDB();

    return porHacer;

};

const  getListado = ()=>{

    cargaDB();

    return listadoPorhacer;


}

const actualizar = (descripcion, completado = true)=>{

    cargaDB();

    let index = listadoPorhacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    })

    if(index >= 0 ){

        listadoPorhacer[index].completado = completado
        guardarDB();
        return true;

    }
    else{

        return false;

    }

}

const borrar = (descripcion) =>{

    cargaDB();

    let nuevoListadoPorhacer = listadoPorhacer.filter(tarea => {

        return tarea.descripcion !== descripcion;

    })

    if(listadoPorhacer.length === nuevoListadoPorhacer.length){
        return false;

    }
    else{

        listadoPorhacer = nuevoListadoPorhacer;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
