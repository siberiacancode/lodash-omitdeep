/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage'
};
module.exports = jestConfig;
