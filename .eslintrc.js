module.exports = {
  root: true,
  extends: ['@callstack', 'prettier'],
  plugins: ['prettier', 'react', '@typescript-eslint', 'eslint-plugin-import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
