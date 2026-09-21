// Static build configuration used only by Vercel.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
	integrations: [react()],
	image: {
		domains: ['static.wixstatic.com'],
	},
	output: 'static',
});
