const user = require("./user");

const userAdmin = {
  _id: "bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb",
  user: "admin",
  password: "123456"
};

test("Autenticar usuário adm", async () => {
  const output = await user.authenticate("admin", "123456");
  expect(userAdmin).toEqual(output);
});
