/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init_cmd() {

    //public property
    this.parent = '';
    //Varaibles that belong to this class
    var entryCharCount = 0,
            pString = '',
            pParent = '',
            starttext = '',
            commandsEnteredList = [],
            currPrevEnteredCommand = 0,
            id = '',
            answer = '';

    //This is a constructor for the click and keydown and to prevent deleting until a certain point
    this._const = function () {

        pParent = this.parent;

        concatPrompt(pString);

        $("#" + pParent).click(function () {
            id = $(this).attr('id');
            TerminalRefreshCursor(id);
            scrolling(id);
        });

        $("#" + pParent).keydown(function (e) {
            var kC = e.keyCode;
            //Enter Key
            if (kC == 13)
            {
                var storedText = $("#" + pParent).html(),
                        storetextlength = storedText.length,
                        charCount = storetextlength - entryCharCount,
                        textString = storedText.substring(charCount, storetextlength);
                console.log('textString: ' + textString);
                console.log('charCount: ' + charCount);
                console.log('entryCharCount: ' + entryCharCount);


                starttext = storedText;
                concatPrompt(pString);
                /*
                 * to keep this asset modular we need to be able to accept
                 * multiple types of entries
                 */
                if (textString.match(/=/g) || textString.match(/;/g)) {
                    toArray(textString);
                } else {
                    singleEntry(textString);
                }

                if (textString !== '') {
                    commandsEnteredList.push(textString);
                }
                TerminalRefreshCursor(id);


                entryCharCount = 0;
                e.preventDefault();
            }

            if (kC !== 9 && kC !== 20 && kC !== 16 && kC !== 17 &&
                    kC !== 18 && kC !== 91 && kC !== 37 && kC !== 39 &&
                    kC !== 38 && kC !== 40 && kC !== 13 && kC !== 8)
            {
                entryCharCount++;
            }
            /*
             * the arrow keys - i want to be able to use all of the previously entered commands
             */
            if (kC == 38) {
                entryCharCount = commandsEnteredList[currPrevEnteredCommand].length;
                addKeys(commandsEnteredList[currPrevEnteredCommand]);

                if (currPrevEnteredCommand < commandsEnteredList.length - 1) {
                    currPrevEnteredCommand++;
                } else {
                    currPrevEnteredCommand = 0;
                }
                e.preventDefault();
            }
            if (kC == 40) {
                entryCharCount = commandsEnteredList[currPrevEnteredCommand].length;
                addKeys(commandsEnteredList[currPrevEnteredCommand]);

                if (currPrevEnteredCommand !== commandsEnteredList.length - 1) {
                    currPrevEnteredCommand++;
                } else {
                    currPrevEnteredCommand = 0;
                }
                e.preventDefault();
            }
            //This is the delete condition
            if (kC == 8 && entryCharCount > 0) {
                entryCharCount--;
            } else if (kC == 8 && entryCharCount == 0) {
                e.preventDefault();
            }
        });
    };//End Of Construct

    /*
     * a method to ensure all text is formated for html
     */
    function convertHTML(e) {
        var myString = $("<div />").html(e).text();
        return myString;
    }

    //function to concatenate
    function concatPrompt(e) {
        $("#" + pParent).html(starttext + convertHTML(e));
        scrolling(pParent);
    }
    /*
     * so we can use the arow keys to cycle through previously
     * entered commands
     */
    function addKeys(e) {
        $("#" + pParent).html(starttext + e);
        scrolling(pParent);
        TerminalRefreshCursor(pParent);
    }

    //function to change the command to an array
    function toArray(e) {

        var str = '';
        // alert(typeof String(e).match(/;/gi));
        if (e.match(/;/gi)) {
            str = e.split(";");
            //Calls the toJson method to put it in a json
            multipleCommands(str);
        } else {
            onlyEqualOperator(e);
        }

    }

    /*
     * for commands that only have an equals mark and no semi colon
     */
    function onlyEqualOperator(e) {
        var jsonStringHead = '{ "cmd":[',
                jsonString = "",
                jsonStringFooter = '] }',
                commandSplit = e.split("="),
                total = commandSplit.length,
                currItem = 0;

        for (var i = 0; i < commandSplit.length; i++) {
            //console.log('onlyEqualOperator: ' + commandSplit[i]);
            jsonString += '{"equal":"' + commandSplit[i] + '"}';
            if (currItem < total - 1) {
                jsonString += ',';
                currItem++;
            }

        }
        var newAnswer = jsonString.replace(';', '');//ensuring that a trailing semicolon doesn't break my shit
        console.log('onlyEqualOperator: ' + jsonStringHead + newAnswer + jsonStringFooter);
        answer = JSON.parse(jsonStringHead + newAnswer + jsonStringFooter);
    }

    /*
     * for commands delimited by a semicolon
     */
    function multipleCommands(e) {
        var jsonStringHead = '{ "cmd":[',
                jsonString = "",
                jsonStringFooter = '] }';

        for (var i = 0; i < e.length; i++) {

            if (e[i].match('=')) {
                var commandSplit = e[i].split("="),
                        commandSplit2 = '{"' + commandSplit.toString() + '"}',
                        commandSplit3 = '{"val1":"' + commandSplit[0] + '",';

                commandSplit3 += '"val2":"' + commandSplit[1] + '"}';

                if (i !== e.length - 1) {
                    commandSplit3 += ",";
                }
                jsonString += commandSplit3;
            }
            else if (!e[i] == '' || !e[i] == null)
            {
                var commandSplit5 = '{"semi":"' + e[i] + '"}';

                if (i < e.length - 1) {
                    commandSplit5 += ",";
                }
                jsonString += commandSplit5;
            } else {
                console.log('multipleCommands Error : init_cmd.js');
            }
        }
        console.log('multipleCommands: ' + jsonStringHead + jsonString + jsonStringFooter);

        answer = JSON.parse(jsonStringHead + jsonString + jsonStringFooter);

    }

    /*
     * only one command is given
     */
    function singleEntry(e) {
        var jsonStringHead = '{ "cmd":[',
                jsonString = '"' + e + '"',
                jsonStringFooter = '] }';
        console.log('singleEntry: ' + jsonStringHead + jsonString + jsonStringFooter);
        answer = JSON.parse(jsonStringHead + jsonString + jsonStringFooter);
    }

    //simply I am just forcing it to scroll to the bottom of the page like a real terminal
    function scrolling(e) {
        var actualH = $("#" + e).html().substring(0, $("#" + e).html().length - 1).length;//get the actual height of the hidden text feild by counting the chars
        $("#" + e).animate({scrollTop: actualH}, "fast");
    }

    //Public Method
    this.cmdReturn = function () {
        return answer;
    };

    this.buildPormpt = function (e, id) {
        concatPrompt(e);
        pString = convertHTML(e);
        starttext += pString;
        TerminalRefreshCursor(id);
    };
    this.updateError = function (e) {
        concatPrompt(e);
        pString = convertHTML(e);
        starttext += '</br></br>Error: ' + pString;
        TerminalRefreshCursor(id);
    };

}
