const { gql } = require('apollo-server')

const userSchema = require('./user')

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

module.exports = [linkSchema, userSchema]
