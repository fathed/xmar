//just a simple function that sends to SetCursor.js     tpowell
function TerminalRefreshCursor(e) {
    var editableDiv = document.getElementById(e);
    cursorManager.setEndOfContenteditable(editableDiv);
    console.log(editableDiv);
}