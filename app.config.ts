import type { InlineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from '@tanstack/react-start/config';

const vite: InlineConfig = {
	server: {
		allowedHosts: ['local.nestql.com'],
		hmr: {
			protocol: 'wss',
			host: 'localhost',
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
