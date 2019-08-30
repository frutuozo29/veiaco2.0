const userDomain = require('../../../domain/user')

module.exports = {
  Query: {
    users () {
      return userDomain.findAll()
    }
  },

  Mutation: {
    signup (_, { input }) {
      return userDomain.signup(input)
    },

    login (_, { username, password }) {
      return userDomain.login(username, password)
    }
  }
}
