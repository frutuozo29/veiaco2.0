const categoryDomain = require('../../../domain/category')

module.exports = {
  Query: {
    categories() {
      return categoryDomain.find()
    }
  },

  Mutation: {
    createCategory(_, { input }) {
      return categoryDomain.create(input)
    },
    updateCategory(_, { input }) {
      return categoryDomain.update(input)
    }
  }
}
