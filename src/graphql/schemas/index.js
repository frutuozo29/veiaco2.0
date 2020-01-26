const { gql } = require('apollo-server')

const userSchema = require('./user')
const formPaymentSchema = require('./formPayment')
const categorySchema = require('./category')

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

module.exports = [linkSchema, userSchema, formPaymentSchema, categorySchema]
