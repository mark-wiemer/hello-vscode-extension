import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    // Activate the extension
    vscode.commands.executeCommand('helloworld.helloWorld');

    test('hello command available', async () => {
        await vscode.commands.executeCommand('helloworld.helloWorld');
    });

    test('time command available', async () => {
        await vscode.commands.executeCommand('helloworld.time');
    });
});
