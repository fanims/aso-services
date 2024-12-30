document.addEventListener('DOMContentLoaded', function () {
    new Splide('#demo-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    arrows: false,
    breakpoints: {
        1024: {
        perPage: 2,
        },
        768: {
        perPage: 1,
        },
    },
    }).mount();
});