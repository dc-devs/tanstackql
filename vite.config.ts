import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 3003,
		allowedHosts: ['localhost', 'local.nestql.com'],
		hmr: {
			protocol: 'ws',
			host: 'localhost',
			port: 3003,
		},
	},
	plugins: [
		tanstackStart({
			customViteReactPlugin: true,
		}),
		tailwindcss(),
		viteReact(),
		tsConfigPaths(),
	],
});
