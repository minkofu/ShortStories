const _icon = document.querySelector('.fa-heart');

_icon.addEventListener('click', function () {
    _icon.style.color = '#f00';
});

const BTN = document.querySelector('.fa-chevron-circle-up');

BTN.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    let _offsetY = window.pageYOffset;
    if (_offsetY > 300) {
        BTN.style.display = "flex";
    } else {
        BTN.style.display = "none";
    }
});