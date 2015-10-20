function getValue() {
    /*
     * Get Output From Putty
     */
    this.SessionWindowControl = "";
    this.SessionLoggingRB = "";
    this.loggingFileExistsRB = "";
    this.TerminalLocalEcho = "";
    this.TerminalLineEditing = "";
    this.keyboardBackspace = "";
    this.keyboardHomeKeys = "";
    this.keyboardFunctionKey = "";
    this.keyboardInitialState = "";
    this.keyboardInitialKeypad = "";
    this.bellStyle = "";
    this.bellTaskbarCaption = "";
    this.featuresSecuritySettings = "";
    this.WhenWindowIsResizedRB = "";
    this.CursorAppearanceRB = "";
    this.fontQualityRB = "";
    this.handleLineDrawingCharRB = "";
    this.actionOfMouseButtonsRB = "";
    this.defaultSelectionModeRB = "";
    this.indicateboldedTextRB = "";
    this.connectionInternetProtocol = "";
    this.dataNoSpecifiedUsername = "";
    this.proxyType = "";
    this.proxyDNSnameLookup = "";
    this.telnetHandlingBSD = "";
    this.telnetHandlingRFC = "";
    this.telnetNegotiationPassive = "";
    this.telnetNegotiationActive = "";
    this.sshProtocolVersion = "";
    this.TTYPanelValueRG1 = "";
    this.RadioGroup1 = "";
    this.destinationRG1 = "";
    this.destinationRG2 = "";

    this.sessionsHostNameTxt = "";
    this.sessionsPortTxt = "";
    this.sessionSavedTxtBox = "";
    this.logFileNameTB = "";
    this.terminalAnswerE = "";
    this.bellStyle = "";
    this.bellOverloadAction = "";
    this.setWindowSizeColumnsTB = "";
    this.setWindowSizeRowsTB = "";
    this.linesOfScrollBackTB = "";
    this.gapBetweenWindowedgeTB = "";
    this.windowTitleTB = "";
    this.remoteCharachterSetTB = "";
    this.setToClassTB = "";
    this.redRGBTB = "";
    this.greenRGBTB = "";
    this.blueRGBTB = "";
    this.connectionLogicalName = "";
    this.dataTerminalType = "";
    this.dataTerminalSpeed = "";
    this.dataEnvironmentVariable = "";
    this.dataEnvironmentValue = "";
    this.proxyHostname = "";
    this.proxyPortNumber = "";
    this.proxyExcludeHosts = "";
    this.proxyUsername = "";
    this.proxyTelnet = "";
    this.rloginUsername = "";
    this.privateKeyForAuthenticationTB = "";
    this.userSuppliedGSSAPILibraryPathTB = "";
    this.remoteModeTB = "";
    this.xDisplayLocationTB = "";
    this.xAuthorityFileForLocalDisplayTB = "";
    this.sorcePortTB = "";
    this.forwardedPortDestinationTB = "";
    this.serialLineToConnectToTB = "";
    this.speedBaudTB = "";
    this.dataBitsTB = "";
    this.stopBitsTB = "";






    var jsonStringHead = '{"putty":[',
            jsonStringFooter = ']}',
            answer = "";

    function getSpecificValue() {
        //Get all fields and radio buttons values
        var puttyRadioCount = $('#puttyInterface').find("input:radio[name]:checked").length,
                currRadio = 0,
                stopLoop = false;






        $("input:radio").each(function () {

            var name1 = $(this).attr("name"),
                    value = $(this).attr("value"),
                    id1 = $(this).attr('id');

            // console.log('this.' + name1 + '="";');
            //console.log('else if("' + name1 + '" == name1){this.'+ name1 +' = value;}');
            //  answer += '{"' + id1 + '":"' + value + '"},';

            if (!--puttyRadioCount) {
                getTextFields();

                if ("sessionConnection" == name1) {
                    this.sessionConnection = value;
                }
                else if ("SessionWindowControl" == name1) {
                    this.SessionWindowControl = value;
                }
                else if ("SessionLoggingRB" == name1) {
                    this.SessionLoggingRB = value;
                }
                else if ("loggingFileExistsRB" == name1) {
                    this.loggingFileExistsRB = value;
                }
                else if ("TerminalLocalEcho" == name1) {
                    this.TerminalLocalEcho = value;
                }
                else if ("TerminalLineEditing" == name1) {
                    this.TerminalLineEditing = value;
                }
                else if ("keyboardBackspace" == name1) {
                    this.keyboardBackspace = value;
                }
                else if ("keyboardHomeKeys" == name1) {
                    this.keyboardHomeKeys = value;
                }
                else if ("keyboardFunctionKey" == name1) {
                    this.keyboardFunctionKey = value;
                }
                else if ("keyboardInitialState" == name1) {
                    this.keyboardInitialState = value;
                }
                else if ("keyboardInitialKeypad" == name1) {
                    this.keyboardInitialKeypad = value;
                }
                else if ("bellStyle" == name1) {
                    this.bellStyle = value;
                }
                else if ("bellTaskbarCaption" == name1) {
                    this.bellTaskbarCaption = value;
                }
                else if ("featuresSecuritySettings" == name1) {
                    this.featuresSecuritySettings = value;
                }
                else if ("WhenWindowIsResizedRB" == name1) {
                    this.WhenWindowIsResizedRB = value;
                }
                else if ("CursorAppearanceRB" == name1) {
                    this.CursorAppearanceRB = value;
                }
                else if ("fontQualityRB" == name1) {
                    this.fontQualityRB = value;
                }
                else if ("handleLineDrawingCharRB" == name1) {
                    this.handleLineDrawingCharRB = value;
                }
                else if ("actionOfMouseButtonsRB" == name1) {
                    this.actionOfMouseButtonsRB = value;
                }
                else if ("defaultSelectionModeRB" == name1) {
                    this.defaultSelectionModeRB = value;
                }
                else if ("indicateboldedTextRB" == name1) {
                    this.indicateboldedTextRB = value;
                }
                else if ("connectionInternetProtocol" == name1) {
                    this.connectionInternetProtocol = value;
                }
                else if ("dataNoSpecifiedUsername" == name1) {
                    this.dataNoSpecifiedUsername = value;
                }
                else if ("proxyType" == name1) {
                    this.proxyType = value;
                }
                else if ("proxyDNSnameLookup" == name1) {
                    this.proxyDNSnameLookup = value;
                }
                else if ("telnetHandlingBSD" == name1) {
                    this.telnetHandlingBSD = value;
                }
                else if ("telnetHandlingRFC" == name1) {
                    this.telnetHandlingRFC = value;
                }
                else if ("telnetNegotiationPassive" == name1) {
                    this.telnetNegotiationPassive = value;
                }
                else if ("telnetNegotiationActive" == name1) {
                    this.telnetNegotiationActive = value;
                }
                else if ("sshProtocolVersion" == name1) {
                    this.sshProtocolVersion = value;
                }
                else if ("TTYPanelValueRG1" == name1) {
                    this.TTYPanelValueRG1 = value;
                }
                else if ("RadioGroup1" == name1) {
                    this.RadioGroup1 = value;
                }
                else if ("destinationRG1" == name1) {
                    this.destinationRG1 = value;
                }
                else if ("destinationRG2" == name1) {
                    this.destinationRG2 = value;
                }

            }
        });










        function getTextFields() {

            var puttyTextFieldCount = 0,
                    currRadio = 0;

            //Get all text Fields
            $.each($('input[type=text]'), function () {
                var name1 = $(this).attr('name'),
                        value1 = $(this).val(),
                        id12 = $(this).attr('id');
             //   console.log('else if("' + name1 + '" == name1){this.' + name1 + ' = value1;}');
                //  console.log('this.' + name1 + '="";');
                if ($.trim($(this).val()).length > 0)
                {
                    puttyTextFieldCount++;


                    if ("sessionsHostNameTxt" == name1) {
                        this.sessionsHostNameTxt = value1;
                    }
                    else if ("sessionsPortTxt" == name1) {
                        this.sessionsPortTxt = value1;
                    }
                    else if ("sessionSavedTxtBox" == name1) {
                        this.sessionSavedTxtBox = value1;
                    }
                    else if ("logFileNameTB" == name1) {
                        this.logFileNameTB = value1;
                    }
                    else if ("terminalAnswerE" == name1) {
                        this.terminalAnswerE = value1;
                    }
                    else if ("bellStyle" == name1) {
                        this.bellStyle = value1;
                    }
                    else if ("bellOverloadAction" == name1) {
                        this.bellOverloadAction = value1;
                    }
                    else if ("setWindowSizeColumnsTB" == name1) {
                        this.setWindowSizeColumnsTB = value1;
                    }
                    else if ("setWindowSizeRowsTB" == name1) {
                        this.setWindowSizeRowsTB = value1;
                    }
                    else if ("linesOfScrollBackTB" == name1) {
                        this.linesOfScrollBackTB = value1;
                    }
                    else if ("gapBetweenWindowedgeTB" == name1) {
                        this.gapBetweenWindowedgeTB = value1;
                    }
                    else if ("windowTitleTB" == name1) {
                        this.windowTitleTB = value1;
                    }
                    else if ("remoteCharachterSetTB" == name1) {
                        this.remoteCharachterSetTB = value1;
                    }
                    else if ("setToClassTB" == name1) {
                        this.setToClassTB = value1;
                    }
                    else if ("redRGBTB" == name1) {
                        this.redRGBTB = value1;
                    }
                    else if ("greenRGBTB" == name1) {
                        this.greenRGBTB = value1;
                    }
                    else if ("blueRGBTB" == name1) {
                        this.blueRGBTB = value1;
                    }
                    else if ("connectionLogicalName" == name1) {
                        this.connectionLogicalName = value1;
                    }
                    else if ("dataTerminalType" == name1) {
                        this.dataTerminalType = value1;
                    }
                    else if ("dataTerminalSpeed" == name1) {
                        this.dataTerminalSpeed = value1;
                    }
                    else if ("dataEnvironmentVariable" == name1) {
                        this.dataEnvironmentVariable = value1;
                    }
                    else if ("dataEnvironmentValue" == name1) {
                        this.dataEnvironmentValue = value1;
                    }
                    else if ("proxyHostname" == name1) {
                        this.proxyHostname = value1;
                    }
                    else if ("proxyPortNumber" == name1) {
                        this.proxyPortNumber = value1;
                    }
                    else if ("proxyExcludeHosts" == name1) {
                        this.proxyExcludeHosts = value1;
                    }
                    else if ("proxyUsername" == name1) {
                        this.proxyUsername = value1;
                    }
                    else if ("proxyTelnet" == name1) {
                        this.proxyTelnet = value1;
                    }
                    else if ("rloginUsername" == name1) {
                        this.rloginUsername = value1;
                    }
                    else if ("privateKeyForAuthenticationTB" == name1) {
                        this.privateKeyForAuthenticationTB = value1;
                    }
                    else if ("userSuppliedGSSAPILibraryPathTB" == name1) {
                        this.userSuppliedGSSAPILibraryPathTB = value1;
                    }
                    else if ("remoteModeTB" == name1) {
                        this.remoteModeTB = value1;
                    }
                    else if ("xDisplayLocationTB" == name1) {
                        this.xDisplayLocationTB = value1;
                    }
                    else if ("xAuthorityFileForLocalDisplayTB" == name1) {
                        this.xAuthorityFileForLocalDisplayTB = value1;
                    }
                    else if ("sorcePortTB" == name1) {
                        this.sorcePortTB = value1;
                    }
                    else if ("forwardedPortDestinationTB" == name1) {
                        this.forwardedPortDestinationTB = value1;
                    }
                    else if ("serialLineToConnectToTB" == name1) {
                        this.serialLineToConnectToTB = value1;
                    }
                    else if ("speedBaudTB" == name1) {
                        this.speedBaudTB = value1;
                    }
                    else if ("dataBitsTB" == name1) {
                        this.dataBitsTB = value1;
                    }
                    else if ("stopBitsTB" == name1) {
                        this.stopBitsTB = value1;
                    }

                    // answer += '{"' + id12 + '":"' + value1 + '"},';
                    // 

                }
            });
        }
    }

    //Public Method
    this.jsonReturn = function () {
        //return getValues
        getSpecificValue();
        var returnAnswer = answer + jsonStringFooter,
                two = returnAnswer.replace(/\}\,\]/g, '}]');

        answer = "";
        return jsonStringHead + two;
    };
}





var getValue = new getValue();

$("body").on('click', '#puttyInterface', function () {
    var command = getValue.jsonReturn();
    //  console.log(command);
    var c = JSON.parse(command);
    var inc = 0;
    $.each(c.putty, function (key, val) {
        $.each(val, function (key, value) {
            // console.log(key, value);
            // console.log('this.' + key + '="";');
            resolver([key, value]);
        });
    });
});



function resolver(data) {
    // var data = [];
    if (data[0].match(/^SessionConnection/gi)) {
        // console.log("SessionConnection: "+data[1]);
    } else if (data[0].match(/^SessionWindow/gi)) {
        // console.log("SessionWindow: "+data[1]);
    }
}







