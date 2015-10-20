/*
 * Dialog - J Gibbens & Scott Kotz 2015
 * this class is the basic wrapper for a window style dialog box.
 */

function init_dialog() {
    console.log("init_dialog has been instantiated");
    this.message = 'start';
    this.obj = '';
    this.dialogID = '';
    this.dialogTitle = '';
    this.dialogLeftIcon = '';
    this.dialogRightBtns = '';
    this.dialogCenter = '';
    this.dialogBodyHeader = '';
    this.dialogFooter = '';
    this.dialogWidth = '';
    this.dialogHeight = '';
    this.dialogBGColor = '';
    this.dialogFontColor = '';
    this.dialogFont = 'Arial, sans-serif';

    this.dialog_output = function () {


        var dialog_build = "",
                containerHeight = 0,
                mainW = this.dialogWidth + 33,
                mainH = containerHeight + 70;


        $(this.obj).append('<div id="' + this.dialogID + '" class="dialogContainer generalShadow"><div class="dialogHeader"><div class="dialogTitleArea leftFloat"><div class="imageIcon leftFloat"></div><!--imageIcon--><div class="dialogTitle leftFloat">' + this.dialogTitle + '</div><!--dialogTitle--><div class="clrFloat"></div></div><!--dialogTitleArea--><div class="dialogbtnsArea rightFloat">       <div id="' + this.dialogID + '_dialog_min" class="dialogBTN greybutton leftFloat"><div class="btnIconShadow" id="' + this.dialogID + '_minimizeBtnIcon"> </div></div><div id="' + this.dialogID + '_dialog_max" class="dialogBTN greybutton leftFloat"><div class="btnIconShadow" id="' + this.dialogID + '_maximizeBtnIcon"> </div></div><div id="' + this.dialogID + '_dialog_close" class="redbutton rightFloat"><div id="' + this.dialogID + '_closeBtnIcon">x</div>                 </div><div class="clrFloat"></div></div><!--dialogbtnsArea--><div class="clrFloat"></div><div class="dialogBody"><div class="dialogBodyHeader">' + this.dialogBodyHeader + '</div><!--/dialogBodyHeader--><div id="dialogContent_' + this.dialogID + '" class="dialogContent" spellcheck="false"> ' + this.dialogCenter + ' </div><!--/dialogContent--> </div><!--dialogBody--><div class="dialogFooter"><!-- This has been created just in case the dialog box needs to have a footer--> ' + this.dialogFooter + ' </div><!--dialogFooter--></div><!--dialogContainer-->');







        /*
         * build the buttons on the right
         * So we can have any number of buttons
         */
        /*  if (this.dialogRightBtns != null) {
         var btnColor = '';
         for (var i = 0; i < this.dialogRightBtns.length; i++) {
         
         var btn = '';
         
         btn += '<div id="dialog_' + this.dialogRightBtns[i] + '"';
         
         //do we need the gray or the red button?
         if (this.dialogRightBtns[i] == 'close') {
         btn += ' class="dialogBTN redbutton rightFloat">';
         } else if (this.dialogRightBtns[i] == 'min') {
         btn += ' class="dialogBTN greybutton rightFloat"><div class="btnIconShadow" id="'+this.dialogID+'_minimizeBtnIcon"> </div>';
         } else if (this.dialogRightBtns[i] == 'max') {
         btn += ' class="dialogBTN greybutton rightFloat"><div class="btnIconShadow" id="'+this.dialogID+'_maximizeBtnIcon"> </div>';
         }
         
         btn += '<div id="' + this.dialogRightBtns[i] + 'BtnIcon"> </div>';
         
         $('#' + this.dialogID).find(".dialogbtnsArea").append(btn);
         
         }
         
         }*/

        //$(".dialog_close").toggleClass('greybutton','redbutton');

        $(".dialogBTN").on('click', function () {

        });

        $("#" + this.dialogID + "_closeBtnIcon").on('click', function () {
            $(this).parent().parent().parent().parent().hide();
        });

        //xmarCMD_closeBtnIcon


        $("#" + this.dialogID).draggable();


        //  $('.dialogContent').disableSelection();
        $('#dialogContent_' + this.dialogID).on('click', function () {
            $(this).focus();
        });

        //this.dialogBodyHeader
        if ($(".dialogBodyHeader").text()) {
            containerHeight = this.dialogHeight + 92;
        } else {
            containerHeight = this.dialogHeight + 67;
        }




        $('.leftFloat').css({'float': 'left'});
        $('.leftFloat').css({'float': 'left'});


        $('.rightFloat').css({'float': 'right'});
        $('.clrFloat').css({'clear': 'both'});
        $('.generalShadow').css({'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)'});
        $('.dialogBodyHeader').css({'padding-left': '5px', 'height': '1%', 'color': '#000', 'background': '#d9dff0 linear-gradient(to bottom, #fdfdff 0%, #e4e9f4 35%, #d3daec 46%, #e0e5f5 96%, #b5bbcb 98%, #efefef 100%)', 'border-bottom': '1px solid #f0f0f0'});
        $('.dialogBody').css({'margin': '10px', 'max-width': '100%', 'border': '1px solid #7a7a7a', 'font-size': '13px'});

        //$('#'+this.dialogID).css({'width': this.dialogWidth +' px ' ,'height':containerHeight+'px' });
        // $('.dialogContent').css({'height': containerHeight + 'px','padding':'10px 10px 0','overflow-y':'auto','border-top':'1px solid #3d7aac','border-left':'1px solid #a4c9e3','border-right':'1px solid #a4c9e3','border-bottom':'1px solid #a4c9e3'});
        $('#' + this.dialogID).css({
            'font-family': 'Arial, sans-serif',
            'position': 'absolute',
            'over-flow': 'auto',
            'width': mainW + 'px'
        });

        $('.dialogContainer').css({
            'background': '#f7f7f7',
            'border': '1px solid #333333',
            'border-radius': '5px'
        });

        $('#' + this.dialogID).find('.dialogContent').css({
            'width': this.dialogWidth - 10 + 'px',
            'height': containerHeight + 'px',
            'padding': '10px',
            'overflow-y': 'auto',
            'border-top': '1px solid #3d7aac',
            'border-left': '1px solid #a4c9e3',
            'border-right': '1px solid #a4c9e3',
            'border-bottom': '1px solid #a4c9e3',
            'background-color': this.dialogBGColor,
            'color': this.dialogFontColor,
            'font-family': this.dialogFont,
            'cursor':'default'
        });

        $('.dialogFooter').css({
            'margin': '10px',
            'max-width': '100%',
            'font-size': '10px'
        });


        $('.dialogContent:read-write:focus').css({'outline': 'none'});









        $('.dialogHeader').css({'height': '1%', 'width': '100%'});
        $('.dialogTitleArea').css({'min-width': '25%', 'height': '100%', 'padding': '5px 0 0 10px'});
        $('.imageIcon').css({'width': '18px', 'height': '18px', 'margin-top': '2px', 'margin-left': '2px', 'background': '#1c94c4'});
        $('.dialogTitle').css({'margin-top': '5px', 'padding-left': '5px', 'font-size': '12px'});


        $('.dialogbtnsArea').css({
            'width': '91px',
            'height': '20px',
            'margin-right': '11px',
            'border-right': '1px solid #7c7c7c',
            'border-left': '1px solid #7c7c7c',
            'border-bottom': '1px solid #7c7c7c',
            'border-bottom-left-radius': '5px',
            'border-bottom-right-radius': '5px'
        });


        $('.greybutton').css({'background': '#cfcfd1 linear-gradient(to bottom, #eaeaea 1%, #eaeaea 51%, #d2d2d2 53%, #dcdee5 100%)', 'border-right': '1px solid #7c7c7c'});
        $('.redbutton').css({'background': '#c35340 linear-gradient(to bottom, #f7b7ad 0%, #e98979 50%, #d95139 51%, #d28573 100%)'});
        $('#' + this.dialogID + '_dialog_min').css({'width': '23px', 'height': '100%', 'border-bottom-left-radius': '4px'});
        $('#' + this.dialogID + '_dialog_max').css({'width': '23px', 'height': '100%'});
        $('#' + this.dialogID + '_dialog_close').css({'width': '43px', 'height': '100%', 'border-bottom-right-radius': '4px', 'text-align': 'center'});
        $('.btnIconShadow').css({'box-shadow': '0px 0px 0px 1px rgba(83,86,102,.75), inset 0px 0px 0px 1px rgba(83,86,102,.75)'});
        $('#' + this.dialogID + '_minimizeBtnIcon').css({'height': '0px', 'width': '9px', 'border': '3px solid #eeeeee', 'margin': '9px auto 0', 'border-radius': '1px'});
        $('#' + this.dialogID + '_maximizeBtnIcon').css({'height': '3px', 'width': '9px', 'border': '3px solid #e8e8e8', 'margin': '7px auto 0'});
        $('#' + this.dialogID + '_closeBtnIcon').css({'cursor': 'pointer', 'color': '#fff', 'font-family': 'Arial, sans-serif', 'font-weight': 'bold', 'line-height': '17px', 'text-shadow': '0px 0px 2px #000', 'font-size': '18px'});
        $('#' + this.dialogID + '_closeBtnIcon:before').css({'content': 'x', 'font-family': 'Arial, sans-serif', 'font-weight': 'bold', 'line-height': '15px', 'text-shadow': '0px 0px 2px #000', 'font-size': '18px'});
        $('button').css({'cursor': 'pointer'});
        $('.dialogBTN').css({'cursor': 'pointer'});

    };
}