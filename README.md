# React + TypeScript + Vite

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

Configure the top-level `parserOptions` property in `.eslintrc.cjs`:

```js
parserOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
project: ['./tsconfig.json', './tsconfig.node.json'],
sconfigRootDir: __dirname,
},
```

Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`

Optionally add `plugin:@typescript-eslint/stylistic-type-checked`

Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

Install [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) and add `plugin:jsx-a11y/recommended` to the `extends` list.

Install [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise) and add `plugin:promise/recommended` to the `extends` list.

Install [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) and add `sonarjs` to the `plugins` option of your `.eslintrc` and/?or add `plugin:sonarjs/recommended` to the extends option to enable all recommended rules.

```js
  ...
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  ...
  plugins: ['react-refresh', 'sonarjs'],
```

## Prettier

Install Prettier locally: `yarn add --dev --exact prettier`

Install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and add `prettier` to the `extends` list. Make sure to put it last, so it gets the chance to override other configs.

`??? or` update the `.eslintrc.*` file by adding `plugin:prettier/recommended` to the extends array and `'prettier/prettier': 'error'` to the `rules` object:

```js
  extends: [
    ...
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
```

## Stylelint

install Stylelint and the config:

```
yarn add --dev stylelint stylelint-config-standard stylelint-config-clean-order
```

Add `.stylelintrc.json`:

```json
{
  "extends": ["stylelint-config-standard", "stylelint-config-clean-order"],
  "rules": {
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "no-missing-end-of-source-newline": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null
  },
  "ignoreFiles": [
    "build/**",
    "coverage/**",
    "dist/**",
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

Add script to `package.json`:

```json
"lint:css": "stylelint \"src/*.css\""
```

### ??? other configs

If you are going to use styled components also install `stylelint-config-styled-components`

The recommended shareable config for Stylelint `stylelint-config-recommended`

## Husky and lint-staged

Install [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/lint-staged/lint-staged):

```
yarn add --dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

Add the following to your `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --cache --fix",
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

## Vite configs

[vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr) to transform SVGs into React components:

```
yarn add --dev vite-plugin-svgr
```

[vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths) give vite the ability to resolve imports using TypeScript's path mapping.

```
yarn add --dev vite-tsconfig-paths
```

## TS configs

Add to `tsconfigs.json` for absolute paths:

```json
/* Paths */
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

```json
 "include": [".eslintrc.cjs", "src"], ???
```
