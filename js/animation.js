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
$("#animatedBlob").css({
    "background": "url('../images/blob2.svg')",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "contain",
});
var animatedBlobsBg = window.setInterval(function() {
    if ($("#animatedBlob").position().top > $(document).scrollTop() + $("#navbar").height()) {
        if (firstBlob) {
            $("#animatedBlob").css({
                "background": "url('../images/blob3.svg')",
                "background-repeat": "no-repeat",
                "background-position": "center",
                "background-size": "contain",
            });
            firstBlob = false;
        } else {
            $("#animatedBlob").css({
                "background": "url('../images/blob2.svg')",
                "background-repeat": "no-repeat",
                "background-position": "center",
                "background-size": "contain",
            });
            firstBlob = true;
        }
    }
}, 2000);