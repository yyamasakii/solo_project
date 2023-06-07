const express = require("express");
const router = express.Router();

const knex = require("./knex");

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
		return knex.select("*").from("link");
	};
	const allData = await getAllData();
	res.status(200).json(allData);
});

// router.post("/new", (req, res) => {
// 	// https://zenn.dev/wkb/books/node-tutorial/viewer/todo_06
// 	const todo = req.body.add;
// 	knex("tasks")
// 		.insert({ user_id: 1, content: todo })
// 		.then(function () {
// 			res.redirect("/");
// 		})
// 		.catch(function (err) {
// 			console.error(err);
// 			res.render("index", {
// 				title: "ToDo App",
// 			});
// 		});
// });
module.exports = router;
