$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() > 100 && !$("#navbar").hasClass("bg-black")) {
        $("#navbar").addClass("bg-black");
    }
    if ($(document).scrollTop() < 100 && $("#navbar").hasClass("bg-black")) {
        $("#navbar").removeClass("bg-black");
    }
})