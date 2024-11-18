import {IButtons} from "../interfaces/IButtons";
import "../styles/buttons.css";
const Buttons: React.FC<IButtons> = ({label, onClick, disabled}) => {
	return (
		<div>
			<button className="custom-button" onClick={onClick} disabled={disabled}>
				{label}
			</button>
		</div>
	);
};

export default Buttons;
