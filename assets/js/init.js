// Selector
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

// AOS
$(function() {
    AOS.init();
});

// Typed
const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        cursorChar: '_'
    });
}

// Lightbox
new SimpleLightbox('#gallerey a.gallerey-box', {
    showCounter: false,
    nav: false,
    close: false,
    docClose: true,
    disableScroll: false
});