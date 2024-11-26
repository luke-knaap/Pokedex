import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Pokemon} from "../classes/pokemon";
import Buttons from "./buttons";
import "../styles/pokemonDatails.css";

function PokemonDetails() {
	const {id} = useParams<{id: string}>();
	const [pokemons, setPokemons] = useState<Pokemon>();

	async function fetchPokemon() {
		try {
			const PokeApiDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const data: any = await PokeApiDetails.json();
			console.log(data);
			const detailedPokemon = new Pokemon(
				data.id,
				data.name,
				data.types.map((type: any) => type.type.name),
				data.weight
			);
			setPokemons(detailedPokemon);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchPokemon();
	}, [id]);

	return (
		<div className="pokemon-details">
			<h1>Pokemon Details</h1>
			<Buttons className="back-button" label="Back" onClick={() => window.history.back()}></Buttons>
			<div className="pokemon-details-card">
				<h1>{pokemons?.getFormattedName()}</h1>
				<img src={pokemons?.getImages(false)} alt={pokemons?.name} />
				<p>{pokemons?.getTypeString()}</p>
				<p>Weight: {pokemons?.weight} kg</p>
			</div>
		</div>
	);
}
export default PokemonDetails;
