'use strict'

let events = {
	code_registry: {}
};

let tasks = [];


module.exports = {
	module: require('./code-registry.js'),
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'code-registry',
		shorthands: events.code_registry
	}
};