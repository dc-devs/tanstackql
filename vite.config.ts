import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tanstackStart({
			customViteReactPlugin: true,
		}),
		viteReact(),
		tsConfigPaths(),
	],
});
