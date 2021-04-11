import { makeAutoObservable } from "mobx"

class Data {
	selectedForm = 1;
	data = {
		name: '',
		lastname: '',
		surname: '',
		date: '',
		email: '',
		pwd: '',
		pwd2: ''
	};

	//Для проверки на выход из инпута (для валидации поля)

	input = {
		nameInput: false,
		lastnameInput: false,
		surnameInput: false,
		dateInput: false,
		emailInput: false,
		pwdInput: false,
		pwd2Input: false
	}

	constructor() {
		makeAutoObservable(this);
	}

	updateData(prop, value) {
		this.data[prop] = value;
	}

	changeInput(prop) {
		this.input[`${prop}Input`] = true;
	}

	nextStep() {
		this.selectedForm++;
	}
}

export default new Data();