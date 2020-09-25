const vscode = require('vscode');
const commands = require('./commands');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    const disposable = vscode.commands.registerCommand('code-share.shareSelected', commands.shareSelectedCode);
    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
