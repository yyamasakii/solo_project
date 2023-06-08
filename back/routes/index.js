const express = require("express");
const router = express.Router();

const knex = require("./knex");

const server = () => {
	/* GET home page. */
	router.get("/", function (req, res, next) {
		// res.render('index', { title: 'Express' }); //renderによる描画は不要
		res.sendFile("./public/build/index.html"); //クライアントにindex.htmlを返す
	});

	/* GET ALL Link Table Data */
	router.get("/all", async (req, res) => {
		/* simple send test */
		// res.json({ message: "Hello" }); // OK
		// **********************************************
		/* use knex */
		const getAllData = () => {
			return knex.select("*").from("link").orderBy("category").orderBy("id");
		};
		const allData = await getAllData();
		res.status(200).json(allData);
	});

	router.post("/new", (req, res) => {
		// https://zenn.dev/wkb/books/node-tutorial/viewer/todo_06
		const newLink = req.body;
		console.log("newLink : ", newLink); // newLink :  { category: 'Express', title: 'aaa', description: 'sss', link: 'ddd' }
		knex
			.insert({
				category: newLink.category,
				title: newLink.title,
				description: newLink.description,
				link: newLink.value,
			})
			.returning("id")
			.into("link")
			.catch(function (err) {
				console.error(err);
			});
		// .then(function () {
		// 	res.redirect("/");
		// })
		// .catch(function (err) {
		// 	console.error(err);
		// 	// res.render("index", {
		// 	// 	title: "ToDo App",
		// 	// });
		// });
	});
	return router;
};
module.exports = server();
