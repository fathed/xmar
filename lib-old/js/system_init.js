/* 
 * Written by J Gibbens
 
 */


function system_init() {
    this.init = function (e) {
        for (var i = 0; i < e.length; i++) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'lib/modules/' + e[i] + '/lib/init_' + e[i] + '.js';
            document.head.appendChild(script);
        }
    };
}