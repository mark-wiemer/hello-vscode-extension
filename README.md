# Hello, world!

This is my first VS Code extension from the ground up! It's my sandbox, not really meant for public consumption :)

It follows the guide at [Visual Studio Code - Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension).

I'll try to leave extensive comments for reference to those writing their first VS Code extension :) feel free to [open an issue](https://github.com/mark-wiemer/vscode-helloworld/issues) if you have any questions about first time extension development!

## Tests

[Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) is a major priority of this project. All code will be thoroughly tested before being committed.

All tests run using the standard `npm run test`, documented in `package.json`.

Unit tests focus on miscellaneous functionality of the app. They're written following the official [Testing Extensions guide](https://code.visualstudio.com/api/working-with-extensions/testing-extension).

Grammar tests focus on the tokenization via the TextMate grammar detailed in [Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)

## Engineering quality

Another main goal is to create a project that's very easy to maintain.

-   Make use of automation whenever possible
-   Automated checks at PR time
-   Pre-commit hooks for formatting and linting

### Pre-commit hooks

Pre-commit hooks are setup using `husky` and `lint-staged`. When a commit is attempted, `lint-staged` validates the staged files for correctness (compilation errors, lint problems, and formatting). If anything is wrong, the commit will fail.

To test that pre-commit hooks have been set up correctly, introduce compilation, lint, or formatting issues to a file. Save the file without fixing these issues. Then stage it and try to commit. The relevant check should fail, the commit should be aborted, and the filesystem should not be changed.

## Syntax highlighting

Syntax highlighting support follows [VS Code's syntax highlighting guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide).

This extension...

1. declares that it `contributes` `languages` and `grammars` in `package.json`
1. defines grammar in YAML for readability (see [Using YAML to write a grammar](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#tokenization:~:text=USING%20YAML%20TO%20WRITE%20A%20GRAMMAR))
1. converts YAML grammar to JSON using `npm run compile_grammar`

VS Code...

1. tries to parse relevant files with the grammar using [microsoft/vscode-textmate](https://github.com/Microsoft/vscode-textmate)

## Next steps

I want to improve [AutoHotkey Plus Plus](https://github.com/mark-wiemer/vscode-autohotkey-plus-plus). Right now, I'm focusing on syntax- and semantic-highlighting.

The [Semantic Token Provider](https://code.visualstudio.com/api/references/vscode-api#DocumentSemanticTokensProvider) mentioned in the [Tokenization section of the Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#tokenization) looks like a promising way to provide detailed tokens as well.

Resources:

-   [Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
-   [microsoft/vscode-textmate](https://github.com/Microsoft/vscode-textmate) is the library that tokenizes code via TextMate grammars
-   [PanAeon/vscode-tmgrammar-test](https://github.com/PanAeon/vscode-tmgrammar-test) is recommended by Microsoft to write unit tests for TextMate grammars

## Further reading

See the `/docs` folder for additional documentation.
