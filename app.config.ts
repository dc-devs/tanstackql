import type { InlineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from '@tanstack/react-start/config';

const vite: InlineConfig = {
	server: {
		allowedHosts: ['local.nestql.com'],
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

// import tsConfigPaths from 'vite-tsconfig-paths';
// import { defineConfig } from '@tanstack/react-start/config';

// export default defineConfig({
// 	tsr: {
// 		appDirectory: 'src',
// 	},
// 	vite: {
// 		plugins: [
// 			tsConfigPaths({
// 				projects: ['./tsconfig.json'],
// 			}),
// 		],
// 	},
// });
