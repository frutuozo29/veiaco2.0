const user = require("./user");
const model = require("../models/user");
const mockingoose = require('mockingoose').default;

const userAdmin = {
  _id: "bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb",
  username: "admin",
  password: "123456"
};

const userTest = {
  _id: undefined,
  name: "User Test",
  email: "test@veiaco.com",
  username: "test",
  password: "test123"
};

beforeEach(() => {
  mockingoose.resetAll()
});

test("Autenticar usuário adm", async () => {

  const output = await user.authenticate("admin", "123456");
  expect(userAdmin).toEqual(output);
  expect(userAdmin).toMatchObject(output);
});

test("Autenticar usuário com password válido", async () => {

  mockingoose(model).toReturn(userTest, 'findOne')
  const output = await user.authenticate("test", "test123")
  expect(userTest).toMatchObject(output)
})

test("Autenticar usuário com password inválido", async () => {
  try {
    mockingoose(model).toReturn(userTest, 'findOne')
    await user.authenticate("test", "test12300")
  } catch (err) {
    expect(err.message).toEqual("Username or password is invalid")
  }
})

test("Criar usuário", async () => {

  mockingoose(model).toReturn(userTest, 'save')
  const output = await user.create(userTest)
  expect(userTest).toMatchObject(output._doc)
})

test("Obter por nome do usuário", async () => {

  mockingoose(model).toReturn(userTest, 'findOne')
  const output = await user.readByUsername("admin");
  expect(userTest).toMatchObject(output._doc);
});

test("Obter todos registros", async () => {
  const expectedValue = {
    users: [
      userTest
    ],
    count: 1
  }

  mockingoose(model).toReturn(1, 'count')
  mockingoose(model).toReturn([userTest], 'find')
  const output = await user.read(1, 1)
  output.users = output.users.map(user => user._doc)
  expect(expectedValue).toMatchObject(output)
})

test("Obter por id do usuario", async () => {
  const expectedValue = {
    ...userTest,
    _id: "bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb"
  }
  mockingoose(model).toReturn(expectedValue, 'findOne')
  const output = await user.readById("bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb")
  expect(expectedValue).toMatchObject(output._doc)
})

test("Atualizar usuario", async () => {
  const expectedValue = {
    ...userTest,
    _id: "bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb"
  }
  mockingoose(model).toReturn(expectedValue, 'findOneAndUpdate')
  const output = await user.update("bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb", userTest)
  expect(expectedValue).toMatchObject(output._doc)
})

test("Excluir usuario", async () => {
  const expectedValue = {
    ...userTest,
    _id: "bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb"
  }
  mockingoose(model).toReturn(expectedValue, 'findOneAndRemove')
  const output = await user.del("bdbaeb10-9203-4e1f-93f1-ad12c32ac1bb")
  expect(expectedValue).toMatchObject(output._doc)
})