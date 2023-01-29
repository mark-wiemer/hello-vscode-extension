# Development

## Publishing a new version

1. Create a release branch with the name `v<major>.<minor>.<patch>`, e.g. `v1.2.3`
1. Update the `package.json` `version` and `Changelog.md`
1. Run final tests
1. Push the release branch
1. Open a PR (title e.g. `v1.2.3`, description matching changelog entry)
1. Merge to main
1. On local machine, checkout `main`
1. `git tag 1.2.3` (no prefix)
1. `git push origin 1.2.3`
    > This will automatically publish a new release via the [`deploy` GitHub action](https://github.com/mark-wiemer/vscode-helloworld/actions/workflows/deploy.yml)
1. Create a release for the tag, with title and description matching `Changelog.md`

## Validate deployment

1. [Deploy workflow](https://github.com/mark-wiemer/vscode-helloworld/actions/workflows/deploy.yml)
1. [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=mark-wiemer.helloworld-2022)
1. [Open VSX Marketplace](https://open-vsx.org/extension/mark-wiemer/helloworld-2022)
