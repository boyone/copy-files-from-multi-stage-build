module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  preset: 'ts-jest',
  reporters: ['default', ['jest-junit', { suiteName: 'jest tests' }]]
};
