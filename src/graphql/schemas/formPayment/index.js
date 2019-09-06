const { gql } = require('apollo-server')

const formPaymentSchema = gql`
  
  extend type Query {
    formPayments: [FormPayment!]!
  }
  
  extend type Mutation {
    createFormPayment(input: InputFormPayment): FormPayment  
  }

  type FormPayment {
    _id: String!
    name: String!
    typePayment: String!
  }

  input InputFormPayment {
    name: String!
    typePayment: String!
  }
`

module.exports = formPaymentSchema
