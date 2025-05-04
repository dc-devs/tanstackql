import type { InlineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from '@tanstack/react-start/config';

const vite: InlineConfig = {
	server: {
		host: 'local.nestql.com',
		allowedHosts: ['local.nestql.com'],
		hmr: {
			protocol: 'wss',
			host: 'local.nestql.com',
		},
	},
	plugins: [
		viteTsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
	],
};

const config = defineConfig({
	tsr: {
		appDirectory: 'src',
	},
	vite,
});

export default config;
