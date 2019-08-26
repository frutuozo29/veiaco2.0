const userDomain = require('../../../domain/user')

module.exports = {
  Query: {
    users () {
      return userDomain.findAll()
    }
  },

  Mutation: {
    signup (_, { userInput }) {
      return userDomain.signup(userInput)
    },

    login (_, { username, password }) {
      return userDomain.login(username, password)
    }
  }
}
