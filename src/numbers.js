function incEltNbr(id, end, speed) {
  elt = document.getElementById(id);
  incNbrRec(0, end, elt, speed);
}

function incNbrRec(i, endNbr, elt, speed) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, endNbr, elt, speed);
    }, speed);
  }
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var animatedNumbers = false;

$(window).on("scroll touchmove", function() {
    if (isScrolledIntoView('#about') && !animatedNumbers) {
        incEltNbr("num0", 13, 10);
        incEltNbr("num1", 25, 10);
        incEltNbr("num2", 3, 10);
        incEltNbr("num3", 100, 1);
        animatedNumbers = true;
    }
})