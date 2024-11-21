import {IPokemons} from "../interfaces/IPokemons";
import {typeColors} from "../interfaces/colors";
export class Pokemon implements IPokemons {
	id: number;
	name: string;
	types: string[];
	sprites: {front_default: string; front_shiny: string};
	weight: number;
	constructor(
		id: number,
		name: string,
		types: string[],
		sprites: {front_default: string; front_shiny: string},
		weight: number
	) {
		this.id = id;
		this.name = name;
		this.types = types;
		this.sprites = sprites;
		this.weight = weight;
	}
	getTypeString(): string {
		return this.capitalizeWords(this.types).join(", ");
	}
	getFormattedName(): string {
		return this.name.charAt(0).toUpperCase() + this.name.slice(1);
	}
	getSprite(shiny: boolean): string {
		return shiny ? this.sprites.front_shiny : this.sprites.front_default;
	}
	getTypeColor(type: string): string {
		return typeColors[type] || "FFFFFF";
	}
	private capitalizeWords(words: string[]): string[] {
		return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	}
}
