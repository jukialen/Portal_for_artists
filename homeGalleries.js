const gap = 16;

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);

});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


const carouseSub = document.getElementById('carouseSub'),
    nextSub = document.getElementById('nextSub'),
    prevSub = document.getElementById('prevSub');

nextSub.addEventListener("click", e => {
  carouseSub.scrollTo(widthSub + gap, 0);
});

prevSub.addEventListener("click", e => {
  carouseSub.scrollBy(-(widthSub + gap), 0);
});

let widthSub = carouseSub.offsetWidth;
window.addEventListener("resize", e => (widthSub = carouseSub.offsetWidth));
