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
		prefix
	}) {
		return this.pin.make(prefix);
	}

	actionMakeLabel({
		date,
		prefix
	}) {
		return this.label.make(prefix, date);
	}
}

module.exports = CodeRegistry;
