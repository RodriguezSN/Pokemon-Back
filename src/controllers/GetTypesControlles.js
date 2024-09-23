const axios = require("axios")
const {Type} = require("../db")
const URL_TYPES = `https://pokeapi.co/api/v2/type`



const getTypesControllers = async () => {
    
    // me traigo todos los types desde la tabla type
    const findType = await Type.findAll()
    if(findType[1]){
        // si ya estan cargados los types los retorno y corto la ejecucion 
        return findType
    }else{   
        const {data} = await axios.get(URL_TYPES)
        const {results} = data  
        
        // si no hay types cargados los creo
        const typeDb = results.map( type => ({name: type.name}))
        
        const allTypes = await Type.bulkCreate(typeDb)
        return allTypes
    }
}

module.exports = getTypesControllers