var deviceIndex = 0;
var devices = document.getElementsByClassName("devices");

$(document).ready(function() {
    $(devices[1]).fadeOut();
    $(devices[2]).fadeOut();
})

var deviceChanging = window.setInterval(function() {
    if ($(devices[deviceIndex]).position().top > $(document).scrollTop() + $("#navbar").height()) {
        var org = deviceIndex
        deviceIndex++;
        deviceIndex = deviceIndex % 3;
        $(devices[org]).fadeOut();
        $(devices[deviceIndex]).delay(400).fadeIn();
    }
}, 2000);

var firstBlob = true;
var animatedBlobsBg = window.setInterval(function() {
    if ($("#animatedBlob").position().top > $(document).scrollTop() + $("#navbar").height()) {
        if (firstBlob) {
            $("#animatedBlob").removeClass("blob2");
            $("#animatedBlob").addClass("blob3");
            firstBlob = false;
        } else {
            $("#animatedBlob").removeClass("blob3");
            $("#animatedBlob").addClass("blob2");
            firstBlob = true;
        }
    }
}, 2000);