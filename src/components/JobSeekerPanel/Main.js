import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavAndSide from './NavAndSide'


const Main = () => {

	return (
		<>
			<BrowserRouter>
				<NavAndSide />
			</BrowserRouter>

		</>
	);
}

export default Main;