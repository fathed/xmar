/* 
 * Written by J Gibbens
 * 
 * pass the url of the script and it will be appeneded 
 */

console.log('loadAssets.js successfully loaded.');

function loadAssets(e) {
    console.log('load assets fired off');
    for (var i = 0; i < e.length; i++) {
        console.log('load : '+e[i]);
         $.getScript('lib/assets/' + e[i] + '/init_' + e[i] + '.js');
    }
}
