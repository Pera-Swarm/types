# types [![npm (scoped)](https://img.shields.io/npm/v/@pera-swarm/types.svg)](https://github.com/Pera-Swarm/types/) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Pera-Swarm/types/%F0%9F%9A%80%20Release)](https://github.com/Pera-Swarm/types/releases) [![GitHub issues](https://img.shields.io/github/issues/Pera-Swarm/types)](https://github.com/Pera-Swarm/types/issues)
Types associated with Pera-Swarm

## Summary
`Pera-Swarm/types` repository is created for handling all the type definitions in one place as it is convenient with the modules. Also this repository will reflect the [`pera-swarm`](https://github.com/Pera-Swarm/pera-swarm) library architecture and all of it's type declarations.

### Architecture

- Internal Types:
  - CoordinateType, MessageType
- Internal Classes:
  - Coordinate, Message

- External Types:
  - SensorType, RobotType, ModeType
- External Classes:
  - Sensor, Robot, Mode

### File structure
    .
    ├── ...
    ├── dist/                    # Build files (ignored by git and built using `tsc`)
    ├── lib/                     # Library files
    ├── test/                    # Test files
    ├── global.d.ts              # Global type declaration file
    └── index.d.ts               # Typings for the target package `@types/pera-swarm` only
    ...

### Contribute

#### 1. Install dependencies

Install project dependencies.
```
$ npm install
```
Install typescript globally if you haven't installed already.
```
$ npm install -g typescript
```

#### 2. Compile

This will generate the `dist` folder locally.
Run the typescript compiler if you have typescript installed globally.
```
$ npm run compile
```
or
```
$ tsc
```

Run the compiler in watch mode.
```
$ npm run dev
```
or
```
$ tsc --watch
```

#### 3. Testing

> Note: Before running the test cases, you should compile the typescript files as described in the step 2.
```
$ npm test
```
or run test cases in watch mode.
```
$ npm run test:watch
```

### To-Do
Contribute to [TypeScript Community](https://github.com/DefinitelyTyped/DefinitelyTyped/) and create `@types/pera-swarm` library for convenience.

### Licence
This project is licensed under [LGPL-2.1 Licence](https://github.com/Pera-Swarm/types/blob/main/LICENSE).
