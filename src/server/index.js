const { ApolloServer } = require('apollo-server')

const typeDefs = require('../graphql/schemas')
const resolvers = require('../graphql/resolvers')

const server = new ApolloServer({
  cors: {
    origin: '*',
    credentials: true
  },
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = server
