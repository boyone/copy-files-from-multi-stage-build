module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  preset: 'ts-jest',
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  reporters: ['default', ['jest-junit', { suiteName: 'jest tests' }]],
  globals: {
    'ts-jest': {
      tsConfig: {
        importHelpers: true
      }
    }
  },
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "moduleFileExtensions": [
    "ts",
    "js"
  ]
};
