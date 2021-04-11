import { Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { FormGroup } from "@material-ui/core";
import React from "react";
import CreateInput from "./CreateInput";
import Data from '../store/data.js';

const FirstForm = observer(() => {

	const {name, lastname, surname, date} = Data.data;
	const {nameInput, lastnameInput, surnameInput, dateInput} = Data.input;

	const regExp = /[a-zA-Z]{3,}/;
	const nameVal = regExp.test(name),
			lastnameVal = regExp.test(lastname),
			surnameVal = regExp.test(surname),
			dateVal = date.length > 0;

			console.log(nameVal, nameInput)

	const next = nameVal && lastnameVal && surnameVal && dateVal;

	return (
		<FormGroup>
			<CreateInput prop="name" 
							type="text" 
							label="Имя" 
							error={!nameVal && nameInput}
							text={!nameVal && nameInput ? "Имя должно быть на латинице и больше 2 символов" : ''}/>
			<CreateInput prop="lastname" 
							type="text" 
							label="Фамилия" 
							error={!lastnameVal && lastnameInput}
							text={!lastnameVal && lastnameInput ? "Фамилия должна быть на латинице и больше 2 символов" : ''}/>
			<CreateInput prop="surname" 
							type="text" 
							label="Отчетство" 
							error={!surnameVal && surnameInput}
							text={!surnameVal && surnameInput ? "Отчество должно быть на латинице и больше 2 символов" : ''}/>
			<CreateInput prop="date" 
							type="date" 
							label="Дата рождения"
							value="2000-01-01"
							error={!dateVal && dateInput}
							text={!dateVal && dateInput ? "Укажите дату рождения" : ''}/>
			<Button variant="contained" 
					color="primary" 
					onClick={() => Data.nextStep()} 
					disabled={!next}>Дальше</Button>
		</FormGroup>
	)

})

export default FirstForm;