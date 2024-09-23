const getTypesControllers = require("../controllers/GetTypesControlles")


const getTypes = async (req,res) => {
    try {
        const result =  await getTypesControllers()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = getTypes