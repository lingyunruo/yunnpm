const path = require('path');
const fs = require('fs');
const color = require('colors');
const repl = require('repl');

const projectPath = process.cwd();
const {
	gitClone,
	createDir,
	fsExistsSync,
	rmDir,
	copyDir,
	setPkg
} = require('../lib/utils');

const templateFilePath = 'git@github.com:lingyunruo/react-boilerplates.git';


module.exports = function(projectName) {

	// 这部分是stdin的一个示例，后续会加上交互，按照用户输入信息进行初始化目录

	// process.stdin.setEncoding('utf8');
	//
	// process.stdin.on('readable', () => {
	// 	const chunk = process.stdin.read();
	// 	if (chunk !== null) {
	// 		process.stdout.write(`data: ${chunk}`);
	// 	}
	// });
	//
	// process.stdin.on('end', () => {
	// 	process.stdout.write('end');
	// });

	if(!projectName) {
		projectName = 'my-app'
	}

	let cachePath = path.join(projectPath, '.cache');
	let targetProjectPath = path.join(projectPath, projectName);

	if(fsExistsSync(cachePath)) {
		rmDir(cachePath);
	}
	if(fsExistsSync(targetProjectPath)) {
		rmDir(targetProjectPath);
	}

	createDir(cachePath);
	createDir(targetProjectPath);

	let res = gitClone(templateFilePath, cachePath);

	if(/0/.test(res.status)) {
		console.log(color.green(`Download ${templateFilePath} Successfully`));
		let copyResult = copyDir(cachePath, targetProjectPath);

		if(copyResult) {
			rmDir(cachePath);

			fs.readFile(path.join(targetProjectPath, 'package.json'), {
				encoding: 'utf8'
			}, (err, data) => {
				let config = JSON.parse(data);

				config['name'] = projectName;

				fs.writeFileSync(path.join(targetProjectPath, 'package.json'), JSON.stringify(config, null, '\t'));
			});

			console.log('=======================================');
			console.log('\n');
			console.log(color.green(`${projectName} init SUCCESS`));
			console.log('\n');
			console.log('=======================================');

		}
	}
}