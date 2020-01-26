const { gql } = require('apollo-server')

const userSchema = gql`
  extend type Query {
    categories: [Category!]!
  }
  
  extend type Mutation {
    createCategory(input: CategoryInput!): Category!
    updateCategory(input: CategoryUpdateInput!): Category!
  }

  input SubCategoriesInput {
    description: String!,
    typeValue: String!
  }

  type SubCategories {
    description: String!,
    typeValue: String!
  }

  type Category {
    _id: String!
    description: String!
    subCategories: [SubCategories]
  }

  input CategoryInput {
    description: String!
    subCategories: [SubCategoriesInput]
  }

  input CategoryUpdateInput {
    _id: String!
    description: String!
    subCategories: [SubCategoriesInput]
  }
`

module.exports = userSchema
