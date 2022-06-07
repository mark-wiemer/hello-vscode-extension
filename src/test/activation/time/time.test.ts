import * as vscode from 'vscode';

suite('time command before activation', () => {
    test('is available', async () => {
        await vscode.commands.executeCommand('helloworld.time');
    });
});
