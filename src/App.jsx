
import React from "react";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import FinalForm from "./components/FinalForm";
import './style.css';
import Data from './store/data.js';
import { observer } from "mobx-react-lite";

const App = observer(() => {

	const content = () => {
		switch(Data.selectedForm) {
			case 1:
				return <FirstForm/>
				break;
			case 2:
				return <SecondForm/>
				break;
			case 3:
				return <ThirdForm/>
				break;
			case 4:
				return <FinalForm/>
				break;
		}
	}
	return (
		<div className="container">
			{content()}
		</div>
	)
})

export default App;