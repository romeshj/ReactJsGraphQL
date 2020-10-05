const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');

const typeDefs = gql`	
	type User {
		id: ID
		login: String
		avatar_url: String
	}
	type Query {
		users: [User]
	}
`;

const SERVER = new ApolloServer({
	typeDefs,
	resolvers,
	playground : {
		endpoint : `http://localhost:4000/graphql`,
		settings : {
			'editor.theme' : 'light'
		}
	}
})

module.exports = SERVER;