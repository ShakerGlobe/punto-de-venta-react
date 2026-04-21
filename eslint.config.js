import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint' // Necesitas esta librería

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '.vite'] },
  {
    // Extendemos las configuraciones recomendadas para JS, TS y React
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    // Aplicamos a todos tus archivos de componentes y lógica
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // Usamos el parser de TypeScript para que entienda tus interfaces
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json'],
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Regla de oro: No dejar variables sin usar (muy importante para tu limpieza)
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      // Desactivamos reglas que pueden ser molestas en desarrollo rápido pero mantenemos calidad
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
)