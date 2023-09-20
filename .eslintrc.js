const { eslint } = require('@siberiacancode/eslint');

module.exports = {
  ...eslint.node,
  overrides: [
    ...eslint.node.overrides,
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off'
      }
    }
  ]
};
