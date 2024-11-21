export interface IPokemons {
	id: number;
	name: string;
	types: string[];
	sprites: {
		front_default: string;
		front_shiny: string;
	};
	weight: number;
}
