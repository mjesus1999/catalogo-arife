// Cards
let buttons = document.querySelectorAll('.list__button--click');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('arrow');
        let height = button.nextElementSibling.clientHeight;
        button.nextElementSibling.style.height = height === 0 ? `${button.nextElementSibling.scrollHeight}px` : 0;
    });
});

// Header
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});
