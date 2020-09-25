const vscode = require('vscode');
const api = require('./api');

const shareSelectedCode = async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const range = new vscode.Range(
        editor.selection.start,
        editor.selection.end
    );
    if (range.isEmpty) return;

    const selection = editor.document.getText(range);

    const codeURL = await api.postCode(selection);
    if (!codeURL) {
        return vscode.window.showErrorMessage('Failed to share code. Please retry.');
    }

    vscode.env.openExternal(vscode.Uri.parse(codeURL));
};

module.exports = {
    shareSelectedCode
};
