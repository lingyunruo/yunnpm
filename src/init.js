const fs = require('fs');
const path = require('path');

const initProject = require('./initProject');
const initComponent = require('./initComponent');


module.exports = function(program) {

	let args = program.args;

	// yunnpm init project my-project-name
	if(args.length === 2) {
		if(args[0] === 'project') {
			initProject(args[1]);
		}
		else if(args[0] === 'component') {
			initComponent(args[1]);
		}
	}
	else if(args.length === 1) {
		initProject(args[0]);
	}
	else if(args.length === 0) {
		initProject();
	}
}