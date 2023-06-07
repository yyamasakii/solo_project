import React from "react";

export const Table = (props) => {
	const { allList } = props;
	// console.log("allList :", allList); // 取得OK
	const linkArr = [];
	allList.forEach((item) => {
		linkArr.push(
			<tr>
				<td className="category">{item.category}</td>
				<td className="link_title">{item.title}</td>
				<td className="description">{item.description}</td>
				<td className="link">
					<a href={item.link}>{item.link}</a>
				</td>
			</tr>
		);
	});
	return (
		<table>
			<tr>
				<th className="category">カテゴリー</th>
				<th className="link_title">タイトル</th>
				<th className="description">説明</th>
				<th className="link">URL</th>
			</tr>
			{linkArr}
		</table>
		// <p>this is Table component</p> // 表示OK
	);
};
