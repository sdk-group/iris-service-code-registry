'use strict'

let emitter = require("global-queue");
let code = require("iris-code-util");

class CodeRegistry {
	constructor() {
		this.emitter = emitter;
	}

	init() {
		this.pin = code.PIN;
		this.label = code.Prefix;
	}

	//API
	actionMakePin({
		date, prefix
	}) {
		console.log("TODO: GET ENTRIES", query);
		return Promise.resolve(true);
	}

	actionMakeLabel({
		date, prefix
	}) {
		console.log("TODO: GET ENTRIES", query);
		return Promise.resolve(true);
	}
}

module.exports = CodeRegistry;