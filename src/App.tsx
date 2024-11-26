import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pokemons from "./components/pokemons";
import PokemonDetails from "./components/pokemonDetails";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Pokemons />}></Route>
				<Route path="/pokemon/:id" element={<PokemonDetails />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
