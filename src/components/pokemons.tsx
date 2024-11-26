import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PokeApi} from "../api/pokeApi";
import {Pokemon} from "../classes/pokemon";
import Buttons from "./buttons";
import Inputs from "./inputs";
import "../styles/pokemonCards.css";
function Pokemons() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [next, setNext] = useState<string>("");
	const [previous, setPrevious] = useState<string>("");
	const [shiny, setShiny] = useState<boolean>(false);
	const navigate = useNavigate();

	async function getPokemons(url?: string) {
		const data: any = await PokeApi(url);
		setPokemons(data.pokemonInfo);
		setNext(data.next);
		setPrevious(data.previous);
	}

	useEffect(() => {
		getPokemons();
	}, []);

	const handlePokemonClick = (id: number) => {
		navigate(`/pokemon/${id}`);
	};
	return (
		<div className="pokemons">
			<h1>Pokemons</h1>
			<ul className="pokemons-list">
				{pokemons.map((pokemon) => {
					return (
						<button
							className={`pokemon-card ${shiny ? "shiny" : ""}`}
							key={pokemon.id}
							onClick={() => handlePokemonClick(pokemon.id)}>
							<p>{pokemon.getFormattedName()}</p>
							<img src={pokemon.getImages(shiny)} alt={pokemon.name} />
							<p>
								{pokemon.types.map((type) => (
									<span
										key={type}
										className="type-badge"
										style={{backgroundColor: pokemon.getTypeColor(type)}}>
										{pokemon.capitalizeWords([type])}
									</span>
								))}
							</p>
						</button>
					);
				})}
			</ul>
			<div className="buttons">
				<Buttons
					label="Previous"
					onClick={() => {
						if (previous) getPokemons(previous);
					}}
					disabled={!previous}
				/>
				<Buttons
					label="Next"
					onClick={() => {
						if (next) getPokemons(next);
					}}
					disabled={!next}
				/>
				<Inputs
					label="Shiny"
					type="checkbox"
					value="shiny"
					checked={shiny}
					onChange={() => setShiny(!shiny)}></Inputs>
			</div>
		</div>
	);
}
export default Pokemons;
