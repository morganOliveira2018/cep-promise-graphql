const { ApolloServer } = require("apollo-server");

const CepPromise = require("./datasources");
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        CepPromise: new CepPromise() 
    })
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})

