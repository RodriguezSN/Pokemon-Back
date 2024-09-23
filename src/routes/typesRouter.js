const {Router} = require("express")
const getTypes = require("../handlers/GetTypes")

const typesRouter = Router()

typesRouter.get("/", getTypes)

module.exports = typesRouter