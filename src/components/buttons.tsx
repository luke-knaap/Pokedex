import {IButtons} from "../interfaces/IButtons";
import "../styles/buttons.css";
const Buttons: React.FC<IButtons> = ({label, onClick}) => {
	return (
		<div>
			<button className="custom-button" onClick={onClick}>
				{label}
			</button>
		</div>
	);
};

export default Buttons;
