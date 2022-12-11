# Detailed Documentation

The documentation explains the features that this template comes with and how.

## Git Hooks using Husky

`Husky` uses git hooks to help automating certain tasks, and is configured in [.husky](../.husky) directory.

As of now, [code quality](./code-quality.md) and [commit quality](./commit-quality.md) runs via husky.

## Code Quality

Template uses `eslint` and `prettier` to point out style issues, when you run either:

```sh
$ npm run lint
or
$ npm run finish
```

These options will list out any errors encounterd during a code scan.

To fix those issues automatically, run:

```sh
$ npm run prettier
```

For more information, read about [code quality](./code-quality.md)

## Commit Quality

Commit messages are enfored to follow [this](https://www.conventionalcommits.org/en/v1.0.0/) convention. The format will be helpful in reading changelog.

## Bundling

Refer [here](./bundling.md)

## More References

- [Documentation](./documentation.md)
- [Automation](./automation.md)
- Dependency [list](./dependency-list.md)
- Depencency [explanation](./dependency-explanation.md)

## Language Support

This is a node.js template

## Unit Testing

TBD

## TODO

- Merge plugins from [here](https://github.com/code-hour/nodejs-template/blob/master/package.json)
- Explore [lint-staged](https://www.npmjs.com/package/lint-staged) as well.
- Split the template into `library-template` and `api-template`.
