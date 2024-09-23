const {Pokemon, Type} = require("../db")
const deleteControllers = async (id) => {

        await Pokemon.destroy({
            where:{
                id: id
            },
            // include:{
            //     model: PokemonType ,
            //     attributes:["pokemonId"],
            //     through: {attributes:[]}
            // }
       })
   

}

module.exports = deleteControllers