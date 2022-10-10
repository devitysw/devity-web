var deviceIndex = 0;
var devices = document.getElementsByClassName("devices");

$(document).ready(function() {
    $(devices[1]).fadeOut();
    $(devices[2]).fadeOut();
})

var deviceChanging = window.setInterval(function() {
    var org = deviceIndex
    deviceIndex++;
    deviceIndex = deviceIndex % 3;
    $(devices[org]).fadeOut();
    $(devices[deviceIndex]).delay(400).fadeIn();
}, 2000);