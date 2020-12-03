module.exports = {
	apps: [
		{
			name: 'kurds',
			exec_mode: 'cluster',
			instances: 'max', // Or a number of instances
			script: './client/node_modules/nuxt/bin/nuxt.js',
			args: 'start-client',
		},
	],
}
