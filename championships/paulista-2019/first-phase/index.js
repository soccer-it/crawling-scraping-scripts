const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
	global.window = {};

	console.log('Scraping Campeonato Paulista 2019 - Primeira Fase!');

	// Puppeteer Launch
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width: 1280, height: 768 });

	await page.goto('https://globoesporte.globo.com/sp/futebol/campeonato-paulista/');

	const rootPath = './championships/paulista-2019/first-phase';

	// Browser Dependencies
	await page.addScriptTag({ path: `${rootPath}/node_modules/safedom/build/dist/safedom.min.js` })
	await page.addScriptTag({ path: `${rootPath}/node_modules/ramda/dist/ramda.min.js` })

	const tournamentData = await page.evaluate(() => {
		const R = window.R;
		const safedom = window.safedom;

		const getContent = R.prop('textContent');

		const teams = safedom.selectAll('.classificacao__equipes--time')
			.map(R.map(team => {
				const name = safedom.select('strong', team)
					.map(getContent)
					.getOrElse(null)

				const id = safedom.select('span', team)
					.map(getContent)
					.getOrElse(null)

				return {
					name,
					id
				};
			}))
			.getOrElse([]);

		const groups = safedom.selectAll('.tabela__futebol--listao header')
			.map(R.map(group => {
				const name = R.prop('textContent', group);
				const groupInfo = R.prop('nextElementSibling', group);

				const ranking = safedom.selectAll('.classificacao__equipes--sigla', groupInfo)
					.map(teams => teams.map((team, teamIndex) => {
						const id = getContent(team);

						const stats = safedom.selectAll('.tabela__head--coluna:not(.tabela__head--classificacao)', team.closest('section'))
							.map(currentStats => currentStats.reduce((acc, stat, statIndex) => {
								const statName = getContent(stat);
								const pointsTable = safedom.selectAll('tr', stat.closest('thead').nextElementSibling)
									.map(R.nth(teamIndex))
									.map(currentTeamPoints => {
										return safedom.selectAll('td', currentTeamPoints)
											.map(R.map(getContent))
											.getOrElse([]);
									})
									.getOrElse([])

								return {
									...acc,
									[statName]: R.nth(statIndex, pointsTable)
								};
							}, {}))
							.getOrElse([])

						return {
							id,
							stats
						};
					}))
					.getOrElse([]);

				return {
					name,
					ranking
				};
			}))
			.getOrElse([]);

		return {
			teams,
			groups
		};
	});

	fs.writeFile(`${rootPath}/result.json`, JSON.stringify(tournamentData), function(err) {
		if (err) {
			console.log('[ Error ] - On write results file!');
			throw err;
		}

		console.log('Done!');
		browser.close();
	});
})();