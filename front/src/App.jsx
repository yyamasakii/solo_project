// import logo from "./logo.svg";
import "./App.css";
import { Table } from "./components/Table";
import React, { useState, useEffect } from "react";

function App() {
	const [allList, setAllList] = useState([]);
	useEffect(() => {
		fetch("/all", { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				setAllList(data);
			});
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Link List</h1>
				<Table allList={allList} />
			</header>
		</div>
	);
}

export default App;
