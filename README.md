# types
Types associated with Pera-Swarm

## Summary
`Pera-Swarm/types` repository is created for handling all the type definitions in one place as it is convenient with the modules. Also this repository will reflect the `[pera-swarm](https://github.com/Pera-Swarm/pera-swarm)` library architecture and all of it's type declarations.

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
    └── index.d.ts               # Typings for the target package `@types/pera-swwarm` only
    ...

### To-Do
Contribute to [TypeScript Community](https://github.com/DefinitelyTyped/DefinitelyTyped/) and create `@types/pera-swarm` library for convenience.

### Licence
This project is licensed under [LGPL-2.1 Licence](https://github.com/Pera-Swarm/types/blob/main/LICENSE).