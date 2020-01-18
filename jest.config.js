module.exports = {
  testEnvironment: 'node',
  reporters: ['default'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 30,
      functions: 80,
      lines: 80,
    }
  },
  collectCoverageFrom: [
    "!**/graphql/**",
    "!**/server/**",
    "!**/database/**",
    "!node_modules/",
    "src/**/*.js"
  ]
}
