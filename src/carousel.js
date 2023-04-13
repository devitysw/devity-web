//ewa livity church olimax
let indexes = [0, 0, 0, 0];
function carouselNext(classN, index) {
    var n = document.getElementsByClassName(classN);
    n[indexes[index]].classList.add('hidden');
    indexes[index] += 1;
    
    if (indexes[index] > n.length - 1)
        indexes[index] = 0;
    n[indexes[index]].classList.remove('hidden');
}

function carouselPrev(classN, index) {
    var n = document.getElementsByClassName(classN);
    n[indexes[index]].classList.add('hidden');
    indexes[index] -= 1;
    
    if (indexes[index] < 0)
        indexes[index] = n.length - 1;
    n[indexes[index]].classList.remove('hidden');
}