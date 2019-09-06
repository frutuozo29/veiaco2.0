const { gql } = require('apollo-server')

const userSchema = require('./user')
const formPaymentSchema = require('./formPayment')

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

module.exports = [linkSchema, userSchema, formPaymentSchema]
