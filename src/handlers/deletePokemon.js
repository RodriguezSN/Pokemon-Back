const deleteControllers = require("../controllers/deleteControllers")

const deleteHandlers = async (req,res) => {
    try {
        const {id} = req.params
        await deleteControllers(id)
    } catch (error) {
        console.log(error.message)
    }
} 

module.exports = deleteHandlers