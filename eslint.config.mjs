import globals from 'globals';
import pluginJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  pluginJs.configs.recommended,
  {
    ignores: ["eslint.config.mjs", "dist/", "*.json"],
  },
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: globals.browser,
    },
  },
  {
    rules: {
      indent: ["error", 4],
      semi: ["error", "always"],
      "no-unused-vars": "off",
      "no-console": "off",
      "no-var": "error",
    },
  },
  {
    files: ["*.config.*"],
    rules: {
      "no-underscore-dangle": ["off"],
      "import/no-extraneous-dependencies": "off",
    },
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },
  {
    plugins: { "@stylistic": stylistic },
    rules: {
      "@stylistic/max-len": ["error", { code: 120 }],
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/array-bracket-spacing": ["error", "always"],
      "@stylistic/array-bracket-newline": [
        "error",
        {
          multiline: true,
          minItems: 2,
        },
      ],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2,
          },
        },
      ],
      "@stylistic/no-multi-spaces": [
        "error",
        {
          exceptions: {
            Property: false,
            BinaryExpression: true,
            VariableDeclarator: true,
            ImportDeclaration: true,
          },
        },
      ],
      "@stylistic/key-spacing": ["error", { mode: "strict" }],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxBOF: 1,
        },
      ],
    },
  },
]);
