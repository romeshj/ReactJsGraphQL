# ReactJsGraphQL
Backend server using express graphQL, apollo -server-express and front end using react, apollo-boost, apollo-client

server - http://localhost:4000 - to check  sderver isrunning
GraphIQL - http://localhost:4000/graphql - to open graphql testing editor in browser

Client - open react app using npm start

Note : - in React ApolloClient uri should have same endpoint as that in Backend SERVER ApolloServer - i.e. 
http://localhost:4000/graphql uri should be same in both client and server. 

For Backned,  In Schema we define -
 ----------------------------------
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

For Client i.e for React , we define in index.js
------------------------------------------------

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

check that the uri http://localhost:4000/graphql should be same in both the case



