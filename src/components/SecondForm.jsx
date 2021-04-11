import { Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { FormGroup } from "@material-ui/core";
import React from "react";
import CreateInput from "./CreateInput";
import Data from '../store/data.js';

const SecondForm = observer(() => {
	const email = Data.data.email;
	const emailInput = Data.input.emailInput;
	const next = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

	return (
		<FormGroup>
			<CreateInput prop="email" 
							type="email" 
							label="Email" 
							error={!next && emailInput}
							text={!next && emailInput ? "Неверный формат email" : ''}/>
			<Button variant="contained" 
					color="primary" 
					onClick={() => Data.nextStep()}
					disabled={!next}>Дальше</Button>
		</FormGroup>
	)

})

export default SecondForm;