/* 
 * Written by J Gibbens
 
 */


function app(){
    $.getScript('js/app2.js').success(function () {
        Tempus_app2 = new app2();//set to global scope
    });
     $.getScript('js/app3.js').success(function () {
         var tt = new app3();
     });
}

