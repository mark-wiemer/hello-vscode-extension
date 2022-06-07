import * as vscode from 'vscode';

suite('hello before activation', () => {
    test('is available', async () => {
        await vscode.commands.executeCommand('helloworld.helloWorld');
    });
});
