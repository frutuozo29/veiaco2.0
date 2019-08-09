const database = require('./database')

describe('Database test', () => {
  test('database test', () => {
    const output = database.sum(5, 5)
    const expected = 10

    expect(output).toBe(expected)
  })
})
