import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer.js"


function App() {
	return (
		<div className="App">
			<Nav />
			<HogsContainer hogs = {hogs} />
		</div>
	);
}

export default App

