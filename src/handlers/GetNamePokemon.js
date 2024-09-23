const getNamePokemonControllers = require("../controllers/GetNamePokemonControllers")


const getNamePokemon = async (req,res) => {
    try {
        const {name} = req.params
        const result = await getNamePokemonControllers(name)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = getNamePokemon