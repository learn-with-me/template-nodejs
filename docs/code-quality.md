# Code Quality

## Formatting / Linting

Linters have two categories of rules:

1. `Formatting rules` - guarantees consistency enforcing specific code style across entire code base. These are focused on the structure of the code. This is where `prettier` shines.
2. `Code-quality rules` - these are more likely to catch real bugs with the code. Example, no-unused-vars, no-implicit-globals, etc. This is where `eslint` shines.

### prettier

[Prettier](https://prettier.io/) is an opinionated code formatter, that automatically formats code on save. It removes all original styling and ensures that all outputted code conforms to a consistent style.

This keeps the codebase in an expected structure, make it more readable and saves time for accidental mistakes.

Prettier relies on a config file `.prettierrc.json` for rules and `.prettierignore` for ignoring specified files.

For prettier to work, either it can be triggered via few ways:

1. Manual run
2. npm script
3. CI
4. IDE
5. eslint
6. Git Hooks

#### Current implementation

If you use `eslint`, install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation) to make ESLint and Prettier play nice with each other.

We've setup this option via `husky`'s `pre-commit` hook in the template to avoid any accidental commits. Other options below:

#### Manual run

```sh
# Normally we would run the command below to run it on all files
$ npx prettier --write .

# Since we have other files including json in the code, for ts/js run below with regex:
$ npx prettier '**/*.{js,ts}' --write

# npx ships with npm and lets you run locally installed tools.
```

Instead of remembering when to run prettier, it could be wired up with other scripts like build, start, etc (configured in `package.json`). Run either of below:

```sh
$ npm run prettier

# or run below, which runs "lint" internally, which runs "prettier" internally
$ npm run finish
```

### Dependencies used to make this work:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- husky
- prettier

## References

- [Prettier vs Linters](https://prettier.io/docs/en/comparison.html)
- Prettier [installation](https://prettier.io/docs/en/install.html)
- Prettier [integrating with linters](https://prettier.io/docs/en/integrating-with-linters.html)
- [eslint](https://eslint.org/)
- [eslint-plugin architecture](https://typescript-eslint.io/architecture/eslint-plugin)
