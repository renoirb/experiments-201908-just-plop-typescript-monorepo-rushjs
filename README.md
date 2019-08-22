# Experimenting with Plop, Just, and such.

- https://plopjs.com/documentation/
- https://microsoft.github.io/just/docs/scripts
- https://kulshekhar.github.io/ts-jest/

Although [Just docs](https://microsoft.github.io/just/docs/stacks-monorepo) says it generates a [Rush.js](https://rushjs.io) _monorepo_, it doesn’t.

But that's what I could do in less than one hour with no prior experience with anything here, except [TypeScript](https://www.typescriptlang.org/) and [Lerna](https://github.com/lerna/lerna).

## Use-Case

Related to [microsoft/just#210](https://github.com/microsoft/just/issues/210)

Have a TypeScript monorepo (ideally with Rush, because it is now my new favourite over Lerna), with at least one item, process to run tests, plop files, and run tests.

## Usage example

```
yarn
yarn bootstrap
yarn build
cd packages/d
yarn test
```

Generate an entity;

```
yarn gen
```

See that plop did its job. Even with questions.
