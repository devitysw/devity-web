const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function toggleMobileMenu() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')

    var x = 2 * $('#navbar').height();
    $('#menu').css({ 'top': x + 'px' });
}

btn.addEventListener('click', () => {
    toggleMobileMenu();
})

function scrollToSection(section) {
    $('html').animate({
        scrollTop: $(section).offset().top - 2 * ($("#navbar").height())
    }, 100);

    if (!$('#mobile').hasClass('block')) {
        toggleMobileMenu();
    }
};