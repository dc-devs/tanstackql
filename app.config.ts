import type { InlineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from '@tanstack/react-start/config';

const vite: InlineConfig = {
	server: {
		allowedHosts: ['local.nestql.com'],
		hmr: {
			protocol: 'ws',
			host: 'localhost',
		},
	},
	plugins: [
		viteTsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		{
			name: 'report-hmr-ports',
			configureServer: ({ config }) => {
				const hmr = config.server.hmr;
				if (typeof hmr === 'object' && 'port' in hmr) {
					console.log(
						`\x1b[34mHMR\x1b[0m is listening to \x1b[32mhttp://localhost:${hmr.port}\x1b[0m`,
					);
				}
			},
		},
	],
};

const config = defineConfig({
	tsr: {
		appDirectory: 'src',
	},
	vite,
});

export default config;
