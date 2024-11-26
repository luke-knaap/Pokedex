import {IButtons} from "../interfaces/IButtons";
import "../styles/buttons.css";
const Buttons: React.FC<IButtons> = ({label, className, onClick, disabled}) => {
	return (
		<div>
			<button className={`custom-button ${className}`} onClick={onClick} disabled={disabled}>
				{label}
			</button>
		</div>
	);
};

export default Buttons;
