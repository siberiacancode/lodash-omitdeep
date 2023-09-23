const { jest } = require('@siberiacancode/jest');

/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  ...jest,
  preset: 'ts-jest',
  testEnvironment: 'node'
};

module.exports = jestConfig;
