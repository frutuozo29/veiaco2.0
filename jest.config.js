module.exports = {
  testEnvironment: 'node',
  reporters: ['default'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/database/',
    '<rootDir>/routes/'
  ]
}
