var images = ['#webApp', '#eshop'];
var btns = ['#webAppBtn', '#eshopBtn'];

function clean() {
    for (var i = 0; i < 2; i++) {
        if (!$(images[i]).hasClass('hidden'))
            $(images[i]).addClass('hidden');

        if ($(btns[i]).hasClass('text-lightPurple')) {
            $(btns[i]).removeClass('text-lightPurple');
            $(btns[i]).addClass('text-purple-200');
        }
    }
}

function changeImage(newImg, newBtn) {
    clean();
    $(newBtn).removeClass('text-purple-200');
    $(newBtn).addClass('text-lightPurple');
    $(newImg).removeClass('hidden');
}

var carouselImg = 0;
window.setInterval(function(){
    changeImage(images[carouselImg], btns[carouselImg]);
    if (carouselImg == 0)
        carouselImg = 1;
    else
        carouselImg = 0;
}, 2000);