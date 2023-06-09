const express = require("express");
const router = express.Router();

const knex = require("./knex");

const server = () => {
	/* GET home page. */
	router.get("/", function (req, res, next) {
		//クライアントにindex.htmlを返す
		res.sendFile("./public/build/index.html");
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

	// POST NEW Data
	router.post("/new", async (req, res) => {
		// https://zenn.dev/wkb/books/node-tutorial/viewer/todo_06
		const newLink = req.body;
		console.log("newLink : ", newLink); // newLink :  { category: 'Express', title: 'aaa', description: 'sss', link: 'ddd' }

		const maxIdResult = await knex("link").max("id as max_id");
		const maxId = maxIdResult[0].max_id || 0; // 最大IDを取得し、存在しない場合は0として扱う
		const nextId = maxId + 1;
		const post = async () => {
			await knex
				.insert({
					id: nextId,
					category: newLink.category,
					title: newLink.title,
					description: newLink.description,
					link: newLink.link,
				})
				.into("link")
				.catch(function (err) {
					console.error(err);
				});
		};
		await post();
		res.status(200);
		// error: insert into "link" ("category", "description", "link", "title") values ($1, $2, $3, $4) returning "id" - duplicate key value violates unique constraint "link_pkey"
	});
	return router;
};
module.exports = server();
