module.exports = {
  testEnvironment: "node",
  reporters: ["default"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/database/",
    "<rootDir>/routes/"
  ]
};
