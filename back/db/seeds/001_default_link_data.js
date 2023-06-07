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
			category: "git",
			title: "git レクチャー(git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.hatch-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.hatch-dig",
		},
		{
			id: 2,
			category: "git",
			title: "git レクチャー",
			description: "BTC 2023_4_10",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230410",
		},
		{
			id: 3,
			category: "JavaScript",
			title: "アロー関数レクチャー(git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.pokemon-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.pokemon-dig",
		},
		{
			id: 4,
			category: "JavaScript",
			title: "アロー関数レクチャー",
			description: "BTC 2023_4_11",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230411",
		},
		{
			id: 5,
			category: "JavaScript",
			title: "クロージャーとスコープ part1 レクチャー(git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.closures-part-1-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.closures-part-1-dig",
		},
		{
			id: 6,
			category: "JavaScript",
			title: "クロージャーとスコープ part1 レクチャー",
			description: "BTC 2023_4_12",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230412",
		},
		{
			id: 7,
			category: "JavaScript",
			title: "loscore レクチャー(git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.loscore-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.loscore-dig",
		},
		{
			id: 8,
			category: "JavaScript",
			title: "loscore レクチャー",
			description: "BTC 2023_4_17",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230417",
		},
		{
			id: 9,
			category: "JavaScript",
			title: "closure part2(this) レクチャー(git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.closures-part-2-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.closures-part-2-dig",
		},
		{
			id: 10,
			category: "JavaScript",
			title: "closure part2(this) レクチャー",
			description: "BTC 2023_4_20",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230420",
		},
		{
			id: 11,
			category: "JavaScript",
			title: "class レクチャー(git hub / Stacks & Queues)",
			description:
				"gitのスプリント名：dig-imr-4-precourse.stacks-and-queues-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.stacks-and-queues-dig",
		},
		{
			id: 12,
			category: "JavaScript",
			title: "class レクチャー(git hub / Polymorphism)",
			description: "gitのスプリント名：dig-imr-4-precourse.polymorphism-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.polymorphism-dig",
		},
		{
			id: 13,
			category: "JavaScript",
			title: "class レクチャー",
			description: "BTC 2023_4_24",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230424",
		},
		{
			id: 14,
			category: "JavaScript",
			title: "Node レクチャー(git hub)",
			description: "gitのスプリント名：dig-imr-4-precourse.node-dig",
			link: "https://github.com/codechrysalis/dig-imr-4-precourse.node-dig",
		},
		{
			id: 15,
			category: "JavaScript",
			title: "Node レクチャー",
			description: "BTC 2023_4_25",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230425",
		},
		{
			id: 16,
			category: "Express",
			title: "Postman/HTTP レクチャー(git hub)",
			description: "gitのスプリント名：dig-imr-4-lecture.http",
			link: "https://github.com/codechrysalis/dig-imr-4-lecture.http",
		},
		{
			id: 17,
			category: "Express",
			title: "Postman/HTTP レクチャー",
			description: "BTC 2023_4_26",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230426",
		},
		{
			id: 18,
			category: "Express",
			title: "Express レクチャー(git hub/express-http)",
			description: "gitのスプリント名：dig-imr-4-sprint.express-http",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.express-http",
		},
		{
			id: 19,
			category: "Express",
			title: "Express レクチャー(git hub/chat-app)",
			description: "gitのスプリント名：dig-imr-4-sprint.express",
			link: "https://github.com/codechrysalis/dig-imr-4-sprint.express",
		},
		{
			id: 20,
			category: "Express",
			title: "Postman/HTTP レクチャー",
			description: "BTC 2023_4_27",
			link: "https://dig.codechrysalis.io/dayview/dig-btc-4/20230427",
		},
	]);
};
