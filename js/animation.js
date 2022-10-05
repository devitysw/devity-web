var deviceIndex = 0;
var deviceChanging = window.setInterval(function() {
    var devices = document.getElementsByClassName("devices");
    $.each(devices, function(indexInArray, valueOfElement) {
        if (!$(devices[indexInArray]).hasClass("faded")) {
            $(devices[indexInArray]).addClass("faded");
        }
    });

    $(devices[deviceIndex]).removeClass("faded");
    deviceIndex++;
    if (deviceIndex > 2) {
        deviceIndex = 0;
    }
}, 2000);