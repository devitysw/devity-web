$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() > 100 && !$("#navbar").hasClass("bg-darkPurple")) {
        console.log("1");
        $("#navbar").addClass("bg-darkPurple");
    }
    if ($(document).scrollTop() < 100 && $("#navbar").hasClass("bg-darkPurple")) {
        console.log("2");
        $("#navbar").removeClass("bg-darkPurple");
    }
})