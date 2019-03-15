const database = require("./database");

test("Somar dois números", () => {
  const output = database.sum(5, 5);
  const expected = 10;

  expect(output).toBe(expected);
});
