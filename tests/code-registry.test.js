'use strict'

let CodeRegistry = require("./CodeRegistry/code-registry");
let config = require("./config/db_config.json");

describe("CodeRegistry service", () => {
	let service = null;
	let bucket = null;
	before(() => {
		service = new CodeRegistry();
		service.init();
	});
	describe("CodeRegistry service", () => {
		it("should make pin by office prefix", (done) => {
			return service.actionMakePin({
					prefix: '000',
					date: "2016-01-24"
				})
				.then((res) => {
					console.log(res);
					done();
				})
				.catch((err) => {
					done(err);
				});
		})
		it("should make label by service ", (done) => {
			return service.actionMakeLabel({
					prefix: 'A',
					date: "2016-01-24"
				})
				.then((res) => {
					console.log(res);
					done();
				})
				.catch((err) => {
					done(err);
				});
		})
	})

});