import { ApolloServer } from "@apollo/server";

import fastifyApollo, { fastifyApolloHandler } from "../src/index.js";

describe("fastify specific tests", () => {
	it("not passing in a correct instance throws", async () => {
		const errorString = "You must pass in an instance of `ApolloServer`.";

		expect(() => fastifyApollo(undefined)).toThrow(errorString);
		expect(() => fastifyApolloHandler(undefined)).toThrow(errorString);
		expect(() => fastifyApollo(null)).toThrow(errorString);
		expect(() => fastifyApolloHandler(null)).toThrow(errorString);
		// @ts-expect-error: Type 'Object' is not a valid type for ApolloServer
		expect(() => fastifyApollo(new Object())).toThrow(errorString);
		// @ts-expect-error: Type 'Object' is not a valid type for ApolloServer
		expect(() => fastifyApolloHandler(new Object())).toThrow(errorString);
	});

	it("not calling start causes a clear error", async () => {
		const apollo = new ApolloServer({ typeDefs: "type Query {f: ID}" });

		expect(() => fastifyApollo(apollo)).toThrow(
			"You must `await server.start()` before calling `fastifyApollo()`",
		);

		expect(() => fastifyApolloHandler(apollo)).toThrow(
			"You must `await server.start()` before calling `fastifyApolloHandler()`",
		);
	});
});
