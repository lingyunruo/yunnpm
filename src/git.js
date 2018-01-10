

const { spawnSync } = require('child_process');
const which = require('which');


module.exports = function(program) {
	let args = program.args;
	let options = [...args];

	let subcmd = options.shift();

	if(subcmd === 'new') {
		let userNameObj = spawnSync('git', ['config', 'user.name']);

		let userName = Buffer.from(userNameObj.stdout).toString().replace(/\n/g, '');

		let date = new Date();
		// let currentDate = date.getFullYear() + '' + (date.getMonth() + 1) + '' + date.getDate();
		let currentDate = date.getTime();

		let branchName = userName + '_' + currentDate + '_' + options[0];

		spawnSync('git', ['checkout', '-b', branchName], {
			stdio: 'inherit'
		});
	}
	// else if(subcmd === 'commit') {
	// 	let projectInfo = spawnSync('git', ['status', '-s']);
	// 	let infoList = Buffer.from(projectInfo.stdout).toString().split('\n');
	// 	let fileList = [];
	//
	// 	infoList.map((line) => {
	// 		let file = line.substring(3);
	// 		if(file) {
	// 			fileList.push(line.substring(3));
	// 		}
	// 	});
	//
	// 	spawnSync('git', ['add', ...fileList], {
	// 		stdio: 'inherit'
	// 	});
	// 	spawnSync('git', ['commit'], {
	// 		stdio: 'inherit'
	// 	});
	// }
	else {
		console.log(which.sync('git'));
		spawnSync('git', [...args], {
			stdio: 'inherit'
		});
	}
};