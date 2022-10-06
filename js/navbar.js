$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() > 100 && !$("#navbar").hasClass("bg-darkPurple")) {
        $("#navbar").addClass("bg-darkPurple");
    }
    if ($(document).scrollTop() < 100 && $("#navbar").hasClass("bg-darkPurple")) {
        $("#navbar").removeClass("bg-darkPurple");
    }
})