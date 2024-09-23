const getIdPokemonController = require("../controllers/getIdPokemonControllers")


const getIdPokemons = async (req,res) => {
    try {
        const { id } = req.params
        console.log("buscando desde Id")
        const result = await getIdPokemonController(id) 
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
  
}

module.exports = getIdPokemons