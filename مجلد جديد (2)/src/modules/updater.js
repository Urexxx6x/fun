
const Logger = require('leekslazylogger');
const log = new Logger();
const fetch = require('node-fetch');
const config = require('../../user/' + require('../').config);
let {version} = require('../../package.json');
version = 'v' + version;
const boxen = require('boxen');
const link = require('terminal-link');

module.exports = async () => {
	if (!config.updater) return;
	const json = await (await fetch('https://api.github.com/repos/eartharoid/DiscordTickets/releases')).json();
	const update = json[0];
	let notice = [];

	if (version !== update.tag_name) {
		log.notice(log.f(`There is an update available for AnWR Tickets (${version} -> ${update.tag_name})`));
		notice.push(`&6You are currently using &c${version}&6, the latest is &a${update.tag_name}&6.`);


		console.log(
			boxen(log.f(notice.join('\n')), {
				padding: 1,
				margin: 1,
				align: 'center',
				borderColor: 'yellow',
				borderStyle: 'round'
			})
		);
	}
};