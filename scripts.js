/* Индекс слайда по умолчанию */


const cards = document.querySelectorAll(".spec__wrapper");

cards.forEach(card => {
    card.addEventListener("click", function(){func(card)});    
});

function func(card)
{
    card.classList.toggle("spec__wrapper--clicked");
    console.log(card);
}

var myswiper = new Swiper(".swiper-container", {
    speed: 400, 
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    
    pagination: {
        el : '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay:{
        delay: 7000,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});