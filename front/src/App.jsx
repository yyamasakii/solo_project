// import logo from "./logo.svg";
import "./App.css";
import { AddLinkField } from "./components/AddLinkField";
import { Table } from "./components/Table";
import React, { useState, useEffect } from "react";

function App() {
	const [allList, setAllList] = useState([]);
	const [flag, setFlag] = useState(true);
	useEffect(() => {
		fetch("/all", { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				setAllList(data);
			});
		console.log("falg in App : ", flag);
	}, [flag]);
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Link List</h1>
				<AddLinkField setFlag={setFlag} flag={flag} />
				<Table allList={allList} />
			</header>
		</div>
	);
}

export default App;
