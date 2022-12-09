# Standardized commit messages

It may not seem equally important to everyone, it is still important to have structured commit messages for a few reasons:

1. Commit messages follow standard [conventions](https://www.conventionalcommits.org/en/v1.0.0/)
2. It forces you to think what the commit is about. (nothing stops us from still putting in garbage)
3. Because of the standard convention, these messages can be used in generating changelog4. 

Linting of commit messages is enforced using [husky](https://typicode.github.io/husky/).

## Configuration

### Husky

Can be found in `.husky` folder.

### Commitlint

Can be found in `.commitlintrc.json` file.

## Dependencies used

- @commitlint/cli
- @commitlint/config-conventional
- husky
