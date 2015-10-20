function windowsOS_thumbnails(iconCount) {
                //Windows OS

                //load thumbnails
                var windowH = $(window).height() - 60, //get the stage hieght and subtract 60 so we are cutting off the last possible icon - this is so it fits properly
                        totalIconCountAllowed = Math.floor(windowH / 60), //i want to round down the number we just got and divide by 60 - this gives me the maximum number of icons that will fit per row
                        totalIcons = 0, //how many icons are there?
                        iconRow = 0;//what row are we on

                $("#windowsOS_body").html('');//clear out the previous set so we aren't doubling up

                for (var i = 0; i < iconCount; i++) {
                    //if we are done then reset the counts
                    if (totalIcons === totalIconCountAllowed) {
                        totalIcons = 0;
                        iconRow++;
                    } else {
                        //otherwise we are appending icons
                        $("#windowsOS_body").append('<span id="icon_' + i + '" class="thumbnails"></span>');
                        //use the previous math to find the absolute positioning of each icon
                        $("#icon_" + i).css({
                            'position': 'absolute',
                            //start with a 60px margin multiplied by the totalIcons = 0 would be 0, 1, would be 60, 2 = 120, etc
                            'top': 60 * totalIcons + 'px',
                            //pretty much the same here but for rows
                            'left': 60 * iconRow + 'px'
                        });
                        //increment the icon count
                        totalIcons++;
                    }
                }
            }