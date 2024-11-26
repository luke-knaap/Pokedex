export interface IButtons extends React.HTMLAttributes<HTMLButtonElement> {
	label: string;
	disabled?: boolean;
	onClick: () => void;
}
