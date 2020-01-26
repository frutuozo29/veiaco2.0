const userResolver = require('./user')
const formPaymentResolver = require('./formPayment')
const categoryResolver = require('./category')

module.exports = [userResolver, formPaymentResolver, categoryResolver]
