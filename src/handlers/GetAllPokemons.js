const getAllPokemonsControllers = require("../controllers/GetAllPokemonsControllers")

const getAllPokemons = async (req,res) => {
    try {
        const result = await getAllPokemonsControllers()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = getAllPokemons