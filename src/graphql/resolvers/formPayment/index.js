const formPaymentDomain = require('../../../domain/formPayment')

module.exports = {
  Query: {
    formPayments () {
      return formPaymentDomain.findAll()
    }
  },

  Mutation: {
    createFormPayment (_, { input }) {
      return formPaymentDomain.create(input)
    }
  }
}
