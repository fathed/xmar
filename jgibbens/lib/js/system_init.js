/* 
 * Written by J Gibbens
 */
var Tempus_returnString = {},
        Tempus_timeAndDate = {};


function system_init() {
    $.getScript('lib/js/cursorManager.js').success(function () {
    }).fail(function () {
        console.log('Failed to load cursorManager.js in the xmar init_xmar.js');
    }).success(function () {
    });


    $.getScript('lib/js/TerminalRefreshCursor.js').success(function () {
    }).fail(function () {
        console.log('Failed to load TerminalRefreshCursor.js in the xmar init_xmar.js');
    }).success(function () {
    });



    $.getScript('lib/assets/dialog/init_dialog.js').success(function () {
    }).fail(function () {
        console.log('Failed to load init_dialog.js in the xmar init_xmar.js');
    }).success(function () {
    });



    $.getScript('lib/assets/returnString/init_returnString.js').success(function () {
        Tempus_returnString = new init_returnString();//global
    }).fail(function () {
        console.log('Failed to load init_dialog.js in the xmar init_xmar.js');
    });
    
    
    
    $.getScript('lib/assets/timeAndDate/init_timeAndDate.js').success(function () {
        Tempus_timeAndDate = new init_timeAndDate();//global
    }).fail(function () {
        console.log('Failed to load init_dialog.js in the xmar init_xmar.js');
    });





    this.init = function (e) {
        //load in the load scripts file
        // $.getScript("lib/assets/loadAssets.js");
        $.getScript("lib/js/sortingDialogBoxes.js");
        //load in all needed modules
        for (var i = 0; i < e.length; i++) {
            $.getScript('lib/modules/' + e[i] + '/lib/init_' + e[i] + '.js');
        }
    };
}