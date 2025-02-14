import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dbCredentials: {
		url: 'learn-graphql.sqlite',
	},
	dialect: 'sqlite',
	schema: './schema.ts',
	out: './migrations',
});
