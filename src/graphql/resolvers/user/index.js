const userDomain = require('../../../domain/user')

module.exports = {
  Query: {

  },

  Mutation: {
    signup (_, { userInput }) { return userDomain.signup(userInput) },

    login (_, { username, password }) {
      return userDomain.login(username, password)
    }
  }
}
