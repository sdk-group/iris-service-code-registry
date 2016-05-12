'use strict'


let code = require("iris-code-util");

class CodeRegistry {
	constructor() {
		this.emitter = message_bus;
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
		prefix,
		office
	}) {
		return this.label.make(prefix, office, date)
			.then(res => _.toString(res));
	}
}

module.exports = CodeRegistry;