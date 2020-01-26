const categoryDomain = require('../category')
const categoryModel = require('../../models/category')
const mockingoose = require('mockingoose').default


describe('Category domain tests', () => {

  beforeEach(() => {
    mockingoose.resetAll()
  })

  test('Category create test', async () => {
    const input = {
      description: "Lazer",
      subCategories: [
        { description: "Cinema", typeValue: "D" },
        { description: "Show", typeValue: "D" },
        { description: "Praia", typeValue: "D" }
      ]
    }

    mockingoose(categoryModel).toReturn({ input, _id: 'hastoken' }, 'create')

    const response = await categoryDomain.create(input)
    const responseParsed = JSON.parse(JSON.stringify(response))

    expect(responseParsed).toEqual({ _id: responseParsed._id, ...input })
  })

  test('Category findAll test', async () => {
    const input = [{
      description: "Lazer",
      subCategories: [
        { description: "Cinema", typeValue: "D" },
        { description: "Show", typeValue: "D" },
        { description: "Praia", typeValue: "D" }
      ]
    }]

    mockingoose(categoryModel).toReturn(input, 'find')

    const response = await categoryDomain.findAll()
    const responseParsed = JSON.parse(JSON.stringify(response))

    expect(input).toEqual(responseParsed)
  })
})
