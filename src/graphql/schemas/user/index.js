const { gql } = require('apollo-server')

const userSchema = gql`
  
  extend type Query {
    users: [User!]!
  }
  
  extend type Mutation {
    signup(input: InputUser!): String
    login (username: String!, password: String!): LoginResponse!
  }

  type User {
    _id: String!
    name: String!
    email: String
    username: String!
    password: String!
  }

  type LoginResponse {
    user: UserReponse,
    token: String!
  }

  type UserReponse {
    name: String
    email: String
    username: String
  }

  input InputUser {
    name: String!
    email: String!
    username: String!
    password: String!
  }
`

module.exports = userSchema
