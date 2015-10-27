// ==UserScript==
// @name         HRK Autojoin
// @namespace    HRKA
// @version      0.1
// @description  please make sure you don't have it running the same time as autoref helper, it will collide
// @author       Tackyou
// @match        *://www.hrkgame.com/giveaway/dropkey/today/
// @grant        none
// ==/UserScript==

var errorElem = document.querySelector('body center h1');
if(errorElem != undefined && errorElem.innerHTML.indexOf('404 Not Found')>-1){
    console.log('[HRK Autojoin] error');
    location.reload();
}else{
    var refreshesLeft = +($('.col-md-4.dkrefreshe span').text());
    console.log('[HRK Autojoin] refreshes left: ' + refreshesLeft);
    if(refreshesLeft > 0){
        var theButton = $('button.btn.active.btn-danger.btn-lg.uppercase.rfrbtn');
        if(theButton.length){
            console.log('[HRK Autojoin] joining');
            theButton.trigger('click');
        }
    }
}
