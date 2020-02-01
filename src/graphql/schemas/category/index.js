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
    _id: String
    description: String!,
    typeValue: String!
  }

  type SubCategories {
    _id: String!,
    description: String!,
    typeValue: String!
  }

  type Category {
    _id: String!
    name: String!
    subCategories: [SubCategories]
  }

  input CategoryInput {
    name: String!
    subCategories: [SubCategoriesInput]
  }

  input CategoryUpdateInput {
    _id: String!
    name: String!
    subCategories: [SubCategoriesInput]
  }
`

module.exports = userSchema
