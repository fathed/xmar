/*
 * Dialog - J Gibbens 2015
 * this class is the basic wrapper for a window style dialog box.
 * this is just my concept
 */

function Dialog() {
    this.dialog_output = function (dialogID, dialogTitle, dialogLeftIcon, dialogRightBtns, dialogCenter, dialogWidth, dialogHeight) {

        var dialog_build = ''; //begin to build the dialog object

        dialog_build += '<div id="' + dialogID + '" class="dialogContainer">';
        dialog_build += '<div class="dialogHeader">';
        dialog_build += '<div class="dialogTitleArea left">';
        dialog_build += '<div class="' + dialogLeftIcon + ' left dialogIcon_boxes"></div>';
        dialog_build += '<div class="dialogTitle left"><p>' + dialogTitle + '</p></div>';
        dialog_build += '<div class="clrFloat"></div>';
        dialog_build += '</div>';
        dialog_build += '<div class="dialogbtnsArea right">';

        /*
         * build the buttons on the right
         * So we can have any number of buttons
         */
        if (dialogRightBtns != null) {
            for (var i = 0; i < dialogRightBtns.length; i++) {
                dialog_build += '<div class="' + dialogRightBtns[i] + ' dialogIcon_boxes">';
                dialog_build += '</div>';
            }
        }
        
        dialog_build += '</div>';
        dialog_build += '<div class="clrFloat"></div>';
        dialog_build += '</div>';
        
        dialog_build += '<div class="dialogCenter">' + dialogCenter + '</div>';
        
        dialog_build += '</div>';
        dialog_build += '</div>';
        
        $("#"+dialogID).css({
           'width':dialogWidth+'px !important',
           'height':dialogHeight+'px !important'
        });

        return dialog_build; //return the built object
    };
}