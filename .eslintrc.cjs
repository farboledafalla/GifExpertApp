module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
   settings: { react: { version: '18.2' } },
   plugins: ['react-refresh'],
   rules: {
      'react-refresh/only-export-components': [
         'warn',
         { allowConstantExport: true },
      ],
      // Configurar mensaje a mostrar cuando no existen prop-types para un prop (0=off, 1=warn, 2=error)
      'react/prop-types': 1,
   },
};
