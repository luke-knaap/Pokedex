import Pokemons from "./components/pokemons";
import Buttons from "./components/buttons";
function App() {
	return (
		<>
			<div>
				<Pokemons />
				<div className="buttons">
					<Buttons label="Previous" onClick={() => {}} />
					<Buttons label="Next" onClick={() => {}} />
				</div>
			</div>
		</>
	);
}

export default App;
