require('dotenv').config();
const del = require('del');
const fs = require('fs');
const { src, dest, series, parallel } = require('gulp');
const zip = require('gulp-zip');
const kill = require('kill-port')
const log = require('fancy-log');
var exec = require('child_process').exec;

const name = {
	prod_dir: 'production',
	project: "node-next-build",
	api: 'api',
	app: 'app'
}

function clean() {
	log('Removing the old files in the directory')
	return del(`../${name.prod_dir}/**`, { force: true });
}

function createNodeBuild(cb = "") {
	log(`Building Node code in ./${name.api}/build`)
	return exec(`npm run build`, function (err, stdout, stderr) {
		log(stdout);
		log(stderr);
	});
}

function nodeServerStart(cb = "") {
	log(`Starting server ${process.env.PORT}`)
	kill(process.env.PORT, 'tcp')
	exec(`node ./build/server-bundle.js`);
	cb();
}

function createReactBuild(cb = "") {
	log(`Building React code in ./${name.app}/build`)
	return exec(`cd ../${name.app}/ && npm run build`, function (err, stdout, stderr) {
		log(stdout);
		log(stderr);
		cb(err);
	});
}

function nodeServerStop(cb = "") {
	log(`Stoping server ${process.env.PORT}`)
	return kill(process.env.PORT, 'tcp');
}

function createProductionDir(cb) {
	const dir = `../${name.prod_dir}`;
	log(`Creating the folder if not exist ${name.prod_dir}`)
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
		log('📁  folder created:', dir);
	}
	return Promise.resolve('the value is ignored');
}

function copyNodeDir() {
	log(`Copying Node build in ${name.prod_dir}/${name.project}/`)
	return src('./build/**/*')
		.pipe(dest(`../${name.prod_dir}/${name.project}`));
}

function copyNodeEnv() {
	log(`Copying Node Env in ${name.prod_dir}/${name.project}/`)
	return src('./build/.env')
		.pipe(dest(`../${name.prod_dir}/${name.project}`));
}

function copyReactDir() {
	log(`Copying React build in ${name.prod_dir}/${name.project}/`)
	return src(`../${name.app}/build/**/*`)
		.pipe(dest(`../${name.prod_dir}/${name.project}/${name.app}`));
}

function copyConfigfiles() {
	log(`Copying config files in ${name.prod_dir}/${name.project}/`)
	return src(`../config/**/*`)
		.pipe(dest(`../${name.prod_dir}/${name.project}`));
}

function zippingTask() {
	log(`Zipping the code`)
	return src(`../${name.prod_dir}/${name.project}/**`)
		.pipe(zip(`${name.project}.zip`))
		.pipe(dest(`../${name.prod_dir}/`));
}

exports.default = series(
	clean,
	createNodeBuild,
	// nodeServerStart,
	// createReactBuild,
	// nodeServerStop,
	createProductionDir,
	parallel(copyNodeDir, copyNodeEnv, copyReactDir, copyConfigfiles),
	zippingTask,
);