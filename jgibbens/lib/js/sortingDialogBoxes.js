function sortingDialogBoxes(e) {
    var a = 3;
    for (var i = 0; i < e.length; i++) {

        $(e[i]).click(function () {
            if (a > 50) {
                a = 3;
            } else {
                $(this).css("z-index", a++);
            }
        });
        $(e[i]).draggable({
            start: function (event, ui) {
                if (a > 50) {
                    a = 3;
                } else {
                    $(this).css("z-index", a++);
                }
            }
        });
    }
}