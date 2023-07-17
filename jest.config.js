module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: 'coverage',
  };