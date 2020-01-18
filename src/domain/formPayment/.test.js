const formPaymentDomain = require('../formPayment')
const formPaymentModel = require('../../models/formPayment')
const mockingoose = require('mockingoose').default


describe('FormPayment domain tests', () => {

  beforeEach(() => {
    mockingoose.resetAll()
  })

  test('formPayment create test', async () => {
    const input = {
      name: 'cartao de credito',
      typePayment: 'C'
    }

    mockingoose(formPaymentModel).toReturn({ input, _id: 'hastoken' }, 'create')

    const response = await formPaymentDomain.create(input)
    const responseParsed = JSON.parse(JSON.stringify(response))

    expect(responseParsed).toEqual({ _id: responseParsed._id, ...input })
  })

  test('formPayment findAll test', async () => {
    const input = [{
      name: 'cartao de credito',
      typePayment: 'C'
    }]

    mockingoose(formPaymentModel).toReturn(input, 'find')

    const response = await formPaymentDomain.findAll()
    const responseParsed = JSON.parse(JSON.stringify(response))

    expect(input).toEqual(responseParsed)
  })
})
