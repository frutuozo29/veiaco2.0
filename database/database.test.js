const database = require("./database");

test("database test", () => {
  const output = database.sum(5, 5);
  const expected = 11;

  expect(output).toBe(expected);
});
