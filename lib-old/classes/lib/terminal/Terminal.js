function Terminal() {
    /* method to check for an existing instance
     if (typeof Terminal != "undefined") {
     
     alert('it does exist');
     } else {
     alert("it doesn't exist");
     }
     */

    //required to set up a new dialog box

    this.terminalTitle = 'Terminal';
    this.terminalLeftIcon = '';
    this.terminalRightBtns = ['red','blue','green'];
    this.terminalTarget = '';

    var newDialog = new Dialog();

    this.initTerminal = function () {                       
        $(this.terminalTarget).append(newDialog.dialog_output('Terminal',this.terminalTitle, this.terminalLeftIcon, this.terminalRightBtns, '<div id="terminalBody"></div>',500,400));
    };
}