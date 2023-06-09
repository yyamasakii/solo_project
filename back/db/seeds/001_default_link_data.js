/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("link").del();
	await knex("link").insert([
		{
			id: 1,
			category: "Git",
			title: "git レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.hatch-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.hatch-dig",
		},
		{
			id: 2,
			category: "Git",
			title: "git レクチャー",
			description: "🦋BTC 2023_4_10",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230410",
		},
		{
			id: 3,
			category: "JavaScript/CSS/HTML",
			title: "アロー関数レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.pokemon-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.pokemon-dig",
		},
		{
			id: 4,
			category: "JavaScript/CSS/HTML",
			title: "アロー関数レクチャー",
			description: "🦋BTC 2023_4_11",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230411",
		},
		{
			id: 5,
			category: "JavaScript/CSS/HTML",
			title: "クロージャーとスコープ part1 レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.closures-part-1-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.closures-part-1-dig",
		},
		{
			id: 6,
			category: "JavaScript/CSS/HTML",
			title: "クロージャーとスコープ part1 レクチャー",
			description: "🦋BTC 2023_4_12",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230412",
		},
		{
			id: 7,
			category: "JavaScript/CSS/HTML",
			title: "loscore レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.loscore-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.loscore-dig",
		},
		{
			id: 8,
			category: "JavaScript/CSS/HTML",
			title: "loscore レクチャー",
			description: "🦋BTC 2023_4_17",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230417",
		},
		{
			id: 9,
			category: "JavaScript/CSS/HTML",
			title: "closure part2(this) レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.closures-part-2-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.closures-part-2-dig",
		},
		{
			id: 10,
			category: "JavaScript/CSS/HTML",
			title: "closure part2(this) レクチャー",
			description: "🦋BTC 2023_4_20",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230420",
		},
		{
			id: 11,
			category: "JavaScript/CSS/HTML",
			title: "class レクチャー(💻git hub / Stacks & Queues)",
			description:
				"gitのスプリント名：dig-imr-4-precourse.stacks-and-queues-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.stacks-and-queues-dig",
		},
		{
			id: 12,
			category: "JavaScript/CSS/HTML",
			title: "class レクチャー(💻git hub / Polymorphism)",
			description: "gitのスプリント名：dig-imr-4-precourse.polymorphism-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.polymorphism-dig",
		},
		{
			id: 13,
			category: "JavaScript/CSS/HTML",
			title: "class レクチャー",
			description: "🦋BTC 2023_4_24",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230424",
		},
		{
			id: 14,
			category: "JavaScript/CSS/HTML",
			title: "Node レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.node-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.node-dig",
		},
		{
			id: 15,
			category: "JavaScript/CSS/HTML",
			title: "Node レクチャー",
			description: "🦋BTC 2023_4_25",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230425",
		},
		{
			id: 16,
			category: "Express",
			title: "Postman/HTTP レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-lecture.http",
			link: "https://github.com/codechrysalis/dig-imr-4-lecture.http",
		},
		{
			id: 17,
			category: "Express",
			title: "Postman/HTTP レクチャー",
			description: "🦋BTC 2023_4_26",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230426",
		},
		{
			id: 18,
			category: "Express",
			title: "Express レクチャー(💻git hub/express-http)",
			description: "gitのスプリント名：dig-imr-4-sprint.express-http",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.express-http",
		},
		{
			id: 19,
			category: "Express",
			title: "Express レクチャー(💻git hub/chat-app)",
			description: "gitのスプリント名：dig-imr-4-sprint.express",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.express",
		},
		{
			id: 20,
			category: "Express",
			title: "Postman/HTTP レクチャー",
			description: "🦋BTC 2023_4_27",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230427",
		},
		{
			id: 21,
			category: "JavaScript/CSS/HTML",
			title: "非同期 レクチャー(💻git hub/Amazonian Async)",
			description: "gitのスプリント名：dig-imr-4-mini.amazonian-async-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-mini.amazonian-async-dig",
		},
		{
			id: 22,
			category: "JavaScript/CSS/HTML",
			title: "非同期 レクチャー(💻git hub/Populatron)",
			description: "gitのスプリント名：dig-imr-4-mini.populatron-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-mini.populatron-dig",
		},
		{
			id: 23,
			category: "JavaScript/CSS/HTML",
			title: "非同期、デバッグ　レクチャー",
			description: "🦋BTC 2023_5_8",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230508",
		},
		{
			id: 24,
			category: "JavaScript/CSS/HTML",
			title: "JSON, APIs, & fetch() レクチャー(💻git hub/Fetch Pokemon)",
			description: "gitのスプリント名：dig-imr-4-mini.fetch-pokemon",
			link: "https://github.com/codechrysalis/dig-imr-4-mini.fetch-pokemon",
		},
		{
			id: 25,
			category: "JavaScript/CSS/HTML",
			title: "JSON, APIs, & fetch()　レクチャー",
			description: "🦋BTC 2023_5_9",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230509",
		},
		{
			id: 26,
			category: "JavaScript/CSS/HTML",
			title: "テスト駆動開発　レクチャー",
			description: "🦋BTC 2023_5_10",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230510",
		},
		{
			id: 27,
			category: "JavaScript/CSS/HTML",
			title:
				"REST（HTTP　GET,POST,PUT,PATCH,DELETE、ステータスコード) レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-sprint.rest-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.rest-dig",
		},
		{
			id: 28,
			category: "JavaScript/CSS/HTML",
			title:
				"REST（HTTP　GET,POST,PUT,PATCH,DELETE、ステータスコード) レクチャー",
			description: "🦋BTC 2023_5_11",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230511",
		},
		{
			id: 29,
			category: "Knex/postgerSQL",
			title: "Databases レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-sprint.database-part-1",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.database-part-1",
		},
		{
			id: 30,
			category: "Knex/postgerSQL",
			title:
				"Databases(SQL、データ型、主キー・外部キー、リレーション、トランザクション等) レクチャー",
			description: "🦋BTC 2023_5_15",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230515",
		},
		{
			id: 31,
			category: "Knex/postgerSQL",
			title: "データベース抽象化(Knex) レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-sprint.knex-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.knex-dig",
		},
		{
			id: 32,
			category: "Knex/postgerSQL",
			title: "データベース抽象化(Knex) レクチャー",
			description: "🦋BTC 2023_5_16",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230516",
		},
		{
			id: 33,
			category: "JavaScript/CSS/HTML",
			title: "Webpack レクチャー(💻git hub)",
			description: "gitのスプリント名：dig-imr-4-mini.webpack",
			link: "https://github.com/codechrysalis/dig-imr-4-mini.webpack",
		},
		{
			id: 34,
			category: "JavaScript/CSS/HTML",
			title: "Webpack（developmentモード、productionモード等） レクチャー",
			description: "🦋BTC 2023_5_18",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230518",
		},
		{
			id: 35,
			category: "JavaScript/CSS/HTML",
			title: "State Machines レクチャー(💻git hub/エレベーターのsprint)",
			description: "gitのスプリント名：dig-imr-4-sprint.state-machine",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.state-machine",
		},
		{
			id: 36,
			category: "JavaScript/CSS/HTML",
			title: "State Machines（状態遷移図） レクチャー",
			description: "🦋BTC 2023_5_19",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230519",
		},
		{
			id: 37,
			category: "React",
			title: "React レクチャー(💻git hub/メールアドレス入力・クジ応募のsprint)",
			description:
				"gitのスプリント名：dig-imr-4-lecture.react-dig　※画像APIは終了？しておりデータ取得不可",
			link: "https://github.com/codechrysalis/dig-imr-4-lecture.react-dig",
		},
		{
			id: 38,
			category: "React",
			title:
				"React レクチャー(💻git hub/Amazon S3サービスに画像アップロードするsprint、base-64使用)",
			description: "gitのスプリント名：dig-imr-4-sprint.react-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.react-dig",
		},
		{
			id: 39,
			category: "React",
			title: "React レクチャー",
			description: "🦋BTC 2023_5_22",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230522",
		},
		{
			id: 40,
			category: "TypeScript",
			title: "TypeScript レクチャー(💻git hub/セミ予報)",
			description: "gitのスプリント名：dig-imr-4-sprint.react-typescript-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.react-typescript-dig",
		},
		{
			id: 41,
			category: "TypeScript",
			title: "TypeScript、React×TypeScript レクチャー",
			description: "🦋BTC 2023_5_24",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230524",
		},
		{
			id: 42,
			category: "Deploy",
			title: "TypeScript レクチャー(💻git hub/renderでdeploy)",
			description:
				"gitのスプリント名：dig-imr-4-sprint.fullstack-deployment-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.fullstack-deployment-dig",
		},
		{
			id: 43,
			category: "Deploy",
			title: "CI/CD レクチャー",
			description: "🦋BTC 2023_5_26",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230526",
		},
	]);
};
