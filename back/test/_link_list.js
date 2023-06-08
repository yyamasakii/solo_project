const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
// const { server } = require("../routes/index");
// const server = require("../routes/index");
const expect = chai.expect;

describe("link_list test", () => {
	let request;
	beforeEach(() => {
		// const server = server;
		request = chai.request("http://localhost:3000");
	});

	it("should return status code 200", async () => {
		request.get("/all").end((err, res) => {
			// console.log(server);
			expect(res).to.have.status(200);
			expect(err).to.be.null;
			// done();
		});
	});
	// it("should not return status code 404", async () => {
	// 	console.log("URL : ", request.get("/all"));
	// 	await request.get("/all").end((err, res) => {
	// 		// console.log(server);
	// 		expect(res).to.have.status(404);
	// 		// expect(err).to.be.null;
	// 		// done();
	// 		// Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
	// 	});
	// });
});

// const express = require("express");
// const request = require("request");

// const app = express();

// describe("/all", () => {
// 	test("happy path", (done) => {
// 		request(app).get("/all").expect(200, done);
// 	});
// });
