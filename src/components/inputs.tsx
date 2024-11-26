import {IInput} from "../interfaces/IInput";
import "../styles/inputs.css";
const Inputs: React.FC<IInput> = ({label, type, value, checked, onChange}) => {
	return (
		<div className="input-div">
			<label className="custom-input">
				<input
					type={type}
					value={value}
					checked={checked}
					onChange={onChange}></input>
				{label}
			</label>
		</div>
	);
};
export default Inputs;
