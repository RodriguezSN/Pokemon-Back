const axios = require("axios")

const getIdPokemonController = async (id) => {    
  
        const {data} = await axios.get(`http://localhost:3001/pokemon`)
        const pokemonForIdApi = data.pokemonsApi.find(pokemon => {
            return pokemon.id == id
        })
        const pokemonForIdDb = data.pokemonsDb.find(pokemon => {
            return pokemon.id === id
        })
       if(pokemonForIdApi) return pokemonForIdApi
       if(pokemonForIdDb) return pokemonForIdDb
    
       return "id no valido"
    
}

module.exports = getIdPokemonController