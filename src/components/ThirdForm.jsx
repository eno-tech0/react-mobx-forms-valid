import { Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { FormGroup } from "@material-ui/core";
import React from "react";
import CreateInput from "./CreateInput";
import Data from '../store/data.js';

const ThirdForm = observer(() => {

	const {pwd, pwd2} = Data.data;
	const {pwdInput, pwd2Input} = Data.input;

	const length = pwd.trim().length > 5;
	const next = pwd === pwd2 && length;

	return (
		<FormGroup>
			<CreateInput prop="pwd" 
							type="password" 
							label="Пароль" 
							error={!length && pwdInput}
							text={!length && pwdInput ? "Пароль должен быть больше 5 символов" : ''}/>
			<CreateInput prop="pwd2" 
							type="password" 
							label="Повтор пароля" 
							error={!next && pwd2Input}
							text={!next && pwd2Input ? "Пароли не совпадают!" : ''}/>
			<Button variant="contained" 
					color="primary" 
					onClick={() => Data.nextStep()}
					disabled={!next}>Отправить</Button>
		</FormGroup>
	)

})

export default ThirdForm;