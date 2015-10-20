/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init_timeAndDate() {

    var today = new Date(),
            dd = today.getDate(),
            //January is 0!
            mm = today.getMonth() + 1,
            yyyy = today.getFullYear(),
            D = new Date(),
            hours = D.getHours(),
            minutes = D.getMinutes(),
            seconds = D.getSeconds();

    this.hour = hours;
    this.minute = minutes;
    this.second = seconds;

    this.day = function () {
        if (dd < 10) {
            dd = '0' + dd;
        }
        return dd;
    };
    this.month_num = function ()
    {
        if (mm < 10) {
            mm = '0' + mm;
        }
        return mm;
    };
    this.month_txt = function ()
    {
        var m = '';
        switch (mm) {
            case 0:
                m = 'JAN';
                break;
            case 1:
                m = 'FEB';
                break;
            case 2:
                m = 'MAR';
                break;
            case 3:
                m = 'APR';
                break;
            case 4:
                m = 'MAY';
                break;
            case 5:
                m = 'JUN';
                break;
            case 6:
                m = 'JUL';
                break;
            case 7:
                m = 'AUG';
                break;
            case 8:
                m = 'SEP';
                break;
            case 9:
                m = 'OCT';
                break;
            case 10:
                m = 'NOV';
                break;
            case 11:
                m = 'DEC';
                break;
        }
        return m;
    };
    this.year = yyyy;
}
