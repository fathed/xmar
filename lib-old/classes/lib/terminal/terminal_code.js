function terminal(terminalBody) {
    var entryCharCount = 0;//i need to track how many characters were entered
    var redcomStoreCommands = [];
    
    
    
    $("#" + terminalBody).keydown(function (e) {
        var kC = e.keyCode;
        //for the control key
        if (e.ctrlKey) {
            if (kC === 76) {
                // console.log('CNTRL + L')
            }
            e.preventDefault();
        }
        //------------------------------> end control key
        if (kC !== 9 && kC !== 20 && kC !== 16 && kC !== 17 && kC !== 18 && kC !== 91 && kC !== 37 && kC !== 39 && kC !== 38 && kC !== 40 && kC !== 13 && kC !== 8) {
            entryCharCount++;
        }
        if (kC === 38) {
            /*
             Since i am using one long string to build my terminal (great for perfect positioning) I can't simply append text to it. so I store what is on the screen, delete everything, and append my previous command
             */
            var txt = $("#" + terminalBody).html(),
                    tt = txt.slice(0, txt.length - entryCharCount);
            entryCharCount = redcomStoreCommands[currCommand].length;

            $("#" + terminalBody).html(tt);
            $("#" + terminalBody).append(redcomStoreCommands[currCommand]);
            if (currCommand !== redcomStoreCommands.length - 1) {
                currCommand++;
            } else {
                currCommand = 0;
            }
            TerminalRefreshCursor(terminalBody);
            e.preventDefault();
        }
        if (kC === 40) {
            /*
             this really needs a bit more abstraction but it is working for now.
             basically, I take the current string and store it, then I delete it from the text field, then I add it back with the new string appened
             */
            var txt2 = $("#" + terminalBody).html(),
                    tt2 = txt2.slice(0, txt2.length - entryCharCount);

            entryCharCount = redcomStoreCommands[currCommand].length;
            $("#" + terminalBody).html(tt2);
            $("#" + terminalBody).append(redcomStoreCommands[currCommand]);
            //basic looping
            if (currCommand > 0) {
                currCommand--;
            } else {
                currCommand = redcomStoreCommands.length - 1;
            }
            TerminalRefreshCursor(terminalBody);//always move the cursor to the end of the string
            e.preventDefault();
        }
        //enter key
        if (kC === 13) {

            e.preventDefault();
        }
        /*
         TRICKY!
         I look to see if I am pressing the delete key - if I am I look to see how many characters I have typed (omitting the omitted keys of course).
         If I hit the delete key the number entryCharCount that was incremented as I typed is decremented until 0.
         */
        //backspace
        if (kC === 8 && entryCharCount > 0) {
            entryCharCount--;
        } else if (kC === 8 && entryCharCount === 0) {
            e.preventDefault();
        }
    });
}