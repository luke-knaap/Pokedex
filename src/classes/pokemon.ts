import {IPokemons} from "../interfaces/IPokemons";
import {TYPE_COLORS} from "../constants/colors";
import {POKEMON_FRONT_PNG_URL, POKEMON_FRONT_SHINY_PNG_URL} from "../constants/URLS";
export class Pokemon implements IPokemons {
	id: number;
	name: string;
	types: string[];
	weight: number;
	constructor(id: number, name: string, types: string[], weight: number) {
		this.id = id;
		this.name = name;
		this.types = types;
		this.weight = weight;
	}
	getTypeString(): string {
		return this.capitalizeWords(this.types).join(", ");
	}
	getFormattedName(): string {
		return this.name.charAt(0).toUpperCase() + this.name.slice(1);
	}
	getImages(isShiny: boolean = false): string {
		return isShiny
			? `${POKEMON_FRONT_SHINY_PNG_URL}/${this.id}.png`
			: `${POKEMON_FRONT_PNG_URL}/${this.id}.png`;
	}
	getTypeColor(type: string): string {
		return TYPE_COLORS[type] || "FFFFFF";
	}
	capitalizeWords(words: string[]): string[] {
		return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	}
}
