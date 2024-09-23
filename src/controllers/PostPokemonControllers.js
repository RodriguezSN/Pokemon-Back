const { where } = require("sequelize");
const { Pokemon, Type } = require("../db");
const axios = require("axios");
const postPokemonControllers = async ({
	name,
	image,
	hp,
	attack,
	defense,
	speed,
	height,
	weight,
	typeId,
	origin
}) => {
	//compruebo si faltan datos
	if (
		!name ||
		!image ||
		!hp ||
		!attack ||
		!defense ||
		!speed ||
		!height ||
		!weight
	) {
		return "Faltan datos..";
	}

	//compruebo si ya existe en la api o en la db
	const { data } = await axios.get(`http://localhost:3001/pokemon`);

	const existeAPI = data.pokemonsApi.find((pokemon) => pokemon.name === name);
	const existeDB = data.pokemonsDb.find((pokemon) => pokemon.name === name);
	if (existeAPI || existeDB) {
		return "Ya existe este pokemons";
	}

	//lo creo
	const newPokemon = await Pokemon.create({
		name: name,
		image: image,
		hp: hp,
		attack: attack,
		defense: defense,
		speed: speed,
		height: height,
		weight: weight,
		origin: origin
	});
	//pasamos el id del type de string a Number
	const idTypesNumber = typeId.map((id) => Number(id));
	console.log("idTypesNumber", idTypesNumber);
	console.log("typeId", typeId);
	const dbTypes = await Type.findAll({ where: { id: idTypesNumber } });
	console.log("dbTypes", dbTypes);
	for (let i = 0; i < dbTypes.length; i++) {
		await newPokemon.addType(dbTypes[i]);
	}

	return newPokemon;
};
module.exports = postPokemonControllers;
