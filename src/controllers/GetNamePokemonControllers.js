const axios = require("axios");
const { Pokemon, Type } = require("../db");
const getAllPokemonsControllers = require("./GetAllPokemonsControllers");

const getNamePokemonControllers = async (name) => {
	const existeAPI = [];
	const existeDB = [];
	const { data } = await axios.get(`http://localhost:3001/pokemon`);
	data.pokemonsApi.forEach((pokemon) => {
		if (pokemon.name.toLowerCase().includes(name.toLowerCase())) {
			existeAPI.push(pokemon);
		}
	});
	data.pokemonsDb.forEach((pokemon) => {
		// console.log("db: ", pokemon.name.toLowerCase())
		// console.log("name a buscar: ", name.toLowerCase())
		if (pokemon.name.toLowerCase().includes(name.toLowerCase())) {
			existeDB.push(pokemon);
		}
	});
	if (existeAPI.length == 0 && existeDB.length == 0) {
		return await getAllPokemonsControllers();
	}
	if (existeAPI.length && existeDB.length) {
		return { existeAPI, existeDB };
	} else if (existeDB.length) {
		return existeDB;
	} else if (existeAPI.length) {
		return existeAPI;
	} else {
		return "No se encontraron coincidencias";
	}
};

module.exports = getNamePokemonControllers;
