// const cards = document.querySelectorAll(".spec__wrapper");

// cards.forEach(card => {
//     card.addEventListener("click", function(){func(card)});    
// });

// function func(card)
// {
//     card.classList.toggle("spec__wrapper--clicked");
//     console.log(card);
// }

var dialog = document.querySelector('.spec__info-800');
var overlay = document.querySelector('.overlay');
document.querySelector('#spec__info-open-800').onclick = function () {
    dialog.show();
    overlay.classList.add('overlay-open');
};
document.querySelector('#spec__info-close-800').onclick = function () {
    dialog.close();
    overlay.classList.remove('overlay-open')
};


var myswiper = new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 7000,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
