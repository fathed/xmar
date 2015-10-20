function init() {
    ///set up windows desktop
    var icon_count = 65;//how many icons do I want?

    windowsOS_thumbnails(icon_count);//instantiate

    //listen for the stage to resize
    $(window).resize(function () {
        windowsOS_thumbnails(icon_count);
    });
}