import { Database as BunSQLiteDriver } from 'bun:sqlite';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'drizzle-graphql';
import { drizzle } from 'drizzle-orm/bun-sqlite';

import * as dbSchema from './schema';

const db = drizzle({ client: new BunSQLiteDriver('learn-graphql.sqlite'), schema: dbSchema });

const { schema } = buildSchema(db);

const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server);

console.log(`🚀  Server ready at: ${url}`);
