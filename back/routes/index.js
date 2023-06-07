const express = require("express");
const router = express.Router();

const knex = require("./knex");

/* GET home page. */
router.get("/", function (req, res, next) {
	// res.render('index', { title: 'Express' }); //renderによる描画は不要
	res.sendFile("./public/build/index.html"); //クライアントにindex.htmlを返す
});

module.exports = router;
