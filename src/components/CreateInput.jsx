import React from 'react';
import { TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Data from '../store/data.js';

const CreateInput = observer(({prop, type, label, error, text, value = null}) => {

	return (
		<div>
			<TextField name={prop} 
						error={error}
						helperText={text}
						type={type}
						label={label}
						defaultValue={value}
						onChange={(e) => {Data.updateData(prop, e.target.value)}}
						onInput={(e) => {
							Data.updateData(prop, e.target.value);
							Data.changeInput(prop);
							}}/>
		</div>
	)
})

export default CreateInput;