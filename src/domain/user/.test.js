const userDomain = require('../user')
const userModel = require('../../models/user')
const mockingoose = require('mockingoose').default

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'hashtoken'),
  verify: jest.fn(() => ({ token: 'hashtoken' }))
}))

jest.mock('bcrypt', () => ({
  compare: jest.fn(() => true),
  hash: jest.fn()
}))

describe('User domain tests', () => {


  test('Signup test', async () => {
    const input = {
      name: 'renan',
      email: 'frutuozo29@gmail.com',
      username: 'frutuozo',
      password: '123'
    }

    const user = {
      name: 'renan',
      email: 'frutuozo29@gmail.com',
      username: 'frutuozo'
    }

    mockingoose(userModel).toReturn({ ...input, _id: 'hashvalidationmd5' }, 'create')

    const response = await userDomain.signup(input)

    expect(response).toEqual({ token: 'hashtoken', user })
  })

  test('Login test', async () => {
    const user = {
      name: 'renan',
      email: 'frutuozo29@gmail.com',
      username: 'frutuozo'
    }

    mockingoose(userModel).toReturn(user, 'findOne')

    const response = await userDomain.login('frutuozo', '123')

    expect({ token: 'hashtoken', user }).toEqual(response)

  })

  test('checktoken test', async () => {
    const response = await userDomain.checkToken('hashtoken')

    expect({ token: 'hashtoken' }).toEqual(response)

  })

  test('FindAll test', async () => {
    mockingoose(userModel).toReturn([{}], 'findAll')

    const response = await userDomain.findAll()

    expect(response).toEqual(undefined)
  })

})