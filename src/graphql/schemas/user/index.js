const { gql } = require('apollo-server')

const userSchema = gql`
  extend type Query {
    users: [User!]!
  }
  
  extend type Mutation {
    signup(userInput: InputUser!): String
    login (username: String!, password: String!): String
  }

  type User {
    _id: String!
    name: String!
    email: String!
    username: String!
    password: String!
  }

  input InputUser {
    name: String!
    email: String!
    username: String!
    password: String!
  }
`

module.exports = userSchema
