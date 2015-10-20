/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            function cmd() {

                //public property
                this.promptString = "PowellT > &nbsp;&nbsp; ";

                //Varaibles that belong to this class
                var entryCharCount = 0,
                        pString = this.promptString,
                        starttext = "",
                        myArray = [entryCharCount, this.promptString, starttext],
                        returnString = "",
                        id = " ",
                        answer = "";

                //This is a constructor for the click and keydown and to prevent deleting until a certain point
                this._const = function () {

                    concatPrompt(pString);
                    $("#prompt").click(function () {
                        id = $(this).attr('id');
                        TerminalRefreshCursor(id);

                    });

                    $("#prompt").keydown(function (e) {
                        var kC = e.keyCode;
                        //Enter Key
                        if (kC === 13)
                        {

                            var storedText = $("#prompt").html(),
                                    storetextlength = storedText.length,
                                    charCount = storetextlength - entryCharCount,
                                    textString = storedText.substring(charCount, storetextlength);

                            entryCharCount = 0;



                            starttext = storedText;



                            concatPrompt(pString);
                            toArray(textString);
                            TerminalRefreshCursor(id);
                            e.preventDefault();


                        }

                        if (kC !== 9 && kC !== 20 && kC !== 16 && kC !== 17 &&
                                kC !== 18 && kC !== 91 && kC !== 37 && kC !== 39 &&
                                kC !== 38 && kC !== 40 && kC !== 13 && kC !== 8)
                        {
                            entryCharCount++;
                        }
                        //This is the delete condition
                        if (kC === 8 && entryCharCount > 0) {
                            entryCharCount--;
                        } else if (kC === 8 && entryCharCount === 0) {
                            e.preventDefault();
                        }


                    });

                };//End Of Construct

                //function to concatenate
                function concatPrompt(e) {

                    $("#prompt").html(starttext + "</br>" + e);


                }

                //function to change the command to an array
                function toArray(e) {
                    var str = e.split(";");
                    //Calls the toJson method to put it in a json
                    toJSON(str);

                    //  console.log("Test: " + str);



                }
                //The toJSON method
                function toJSON(e) {
                    var jsonStringHead = '{ "cmd":[',
                            jsonString = "",
                            jsonStringFooter = '] }';

                    //{ "cmd": [{"var1": "John","var2": "Doe" }] }

                    for (var i = 0; i < e.length; i++) {



                        if (e[i].match('=')) {


                            var commandSplit = e[i].split("="),
                                    commandSplit2 = '{"' + commandSplit.toString() + '"}',
                                    commandSplit3 = '{"val1":"' + commandSplit[0] + '",';
                            commandSplit3 += '"val2":"' + commandSplit[1] + '"}';
                            // console.log('{"val1":"'+commandSplit[0]+'"},');
                            // console.log('{"val2":"'+commandSplit[1]+'"}');
                            if (i != e.length - 2) {
                                commandSplit3 += ",";

                            }
                            jsonString += commandSplit3;
                            //return;
                        }
                        else if (!e[i] == ' ' || !e[i] == null)


                        {
                            var commandSplit5 = '{"' + e[i] + '":""}';

                            //console.log(e[i]);
                            if (i != e.length) {
                                commandSplit5 += ",";


                            }
                            jsonString += commandSplit5;
                            // console.log("POPOP" + jsonStringHead + commandSplit5 + jsonStringFooter );
                        }


                    }

                    // console.log(jsonStringHead + jsonString + jsonStringFooter);
                    answer = JSON.parse(jsonStringHead + jsonString + jsonStringFooter);
                    // console.log("JSON" + anwser);
                }


                //Public Method
                this.cmdReturn = function () {
                    //      console.log(answer);
                    return answer;
                };


            }

