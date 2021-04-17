const fetch = require('node-fetch');
fetch('https://api.github.com/users/wvbe/repos?per_page=100')
	.then((response) => response.json())
	.then((repos) =>
		// console.dir(repos) ||
		repos
			.filter((repo) => !repo.fork)
			.filter((repo) => !repo.archived)
			.filter((repo) => repo.homepage)
			.forEach((repo) => {
				console.log(`- [${repo.name}](${repo.homepage})`);
				console.log(`  ${repo.description}`);
			})
	);
