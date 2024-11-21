export interface IInput {
	label: string;
	type?: "radio" | "checkbox";
	value: string;
	checked?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
