# Contributing

Just open an issue, discussion, or pull request :)

## Running locally

1. Clone the repo
1. Install the relevant dependencies
    - VS Code (of course)
    - Node 16 with npm 8
1. `npm i`

## Validate the build

1. `npm run validate`
1. Go to `Run and Debug` viewlet (`Ctrl+Shift+D`) and click "Run Extension"

## Automated checks

All checks are found in `package.json`.

-   Validate: Make sure everything is working correctly
    -   Lint
        -   Quality: ESLint
        -   Format: Prettier
    -   Test
        -   Pretest (compile): TSC
        -   Automated tests: Mocha
