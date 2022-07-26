import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//adapter: adapter()
		adapter: adapter({ out: 'build' })
	}
};

export default config;
