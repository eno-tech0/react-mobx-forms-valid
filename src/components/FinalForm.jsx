import { Card, CardContent, Typography, List, ListItem } from "@material-ui/core";
import React from "react";
import Data from '../store/data.js';

const FinalForm = () => {

	const {name, lastname, surname, date, email} = Data.data;
	return (
		<Card>
			<CardContent>
				<List>
					<ListItem>
						<Typography gutterBottom>
							Поздравляем! Вот Ваши данные:
						</Typography>
					</ListItem>
					<ListItem>Имя: {name}</ListItem>
					<ListItem>Фамилия: {lastname}</ListItem>
					<ListItem>Отчество: {surname}</ListItem>
					<ListItem>Дата рождения: {date}</ListItem>
					<ListItem>Email: {email}</ListItem>
				</List>
			</CardContent>
		</Card>
	)
}

export default FinalForm;