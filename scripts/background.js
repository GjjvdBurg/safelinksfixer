// this file is based on: 
// https://github.com/matthias-g/smileyfixer/blob/0d0c65b55173bca2967535e964d41af453c4a094/scripts/background.js
//

var composeScriptsPromise;
var displayScriptsPromise;

function registerScripts() {
	let scripts = {
		js: [
			{
				file: '/scripts/safelinksfixer.js'
			}
		]
	};
	composeScriptsPromise = browser.composeScripts.register(scripts);
	displayScriptsPromise = browser.messageDisplayScripts.register(scripts);
}

async function unregisterScripts() {
	await composeScriptsPromise.then(script => script.unregister());
	await displayScriptsPromise.then(script => script.unregister());
}

async function reset() {
	await unregisterScripts();
	await init();
}

function init() {
	registerScripts();
}

init();
