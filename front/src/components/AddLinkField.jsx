import React from "react";

export const AddLinkField = (props) => {
	const { setFlag, flag } = props;
	// function getCategory() {
	// 	// console.log(document.getElementById("category_list").value);
	// 	return document.getElementById("category_list").value;
	// }
	// console.log(getCategory());

	const onClick = () => {
		console.log("before : ", flag);
		const newCategory = document.getElementById("category_list");
		const newTitle = document.getElementById("titleField");
		const newDescription = document.getElementById("descriptionField");
		const newLink = document.getElementById("linkField");
		// console.log(
		// 	newCategory,
		// 	newTitle.value,
		// 	newDescription.value,
		// 	newLink.value
		// );
		fetch("/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify({
				category: newCategory.value,
				title: newTitle.value,
				description: newDescription.value,
				link: newLink.value,
			}),
		}).then((response) => console.log(response));
		// .then(window.location.reload());
		// 一覧をリロードさせるためにuseStateのflagを変更
		setFlag(!flag);
		console.log("after : ", flag);
		// inputタグの中身をクリアする
		// newCategory.value = "";
		newTitle.value = "";
		newDescription.value = "";
		newLink.value = "";
	};

	return (
		<div className="newLink">
			<select name="category_selector" id="category_list" size="3" required>
				<option value="Express">Express</option>
				<option value="Git">Git</option>
				<option value="JavaScript">JavaScript</option>
				<option value="Knex">Knex</option>
				<option value="Node">Node</option>
				<option value="React">React</option>
			</select>
			<input
				type="text"
				id="titleField"
				placeholder="タイトル"
				required></input>
			<input
				type="text"
				id="descriptionField"
				placeholder="説明"
				required></input>
			<input type="text" id="linkField" placeholder="URL" required></input>
			<button onClick={onClick}>add link</button>
		</div>
	);
};
