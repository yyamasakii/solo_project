var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	// res.render('index', { title: 'Express' }); //renderによる描画は不要
	res.sendFile("./public//build/index.html"); //クライアントにindex.htmlを返す
});

module.exports = router;
