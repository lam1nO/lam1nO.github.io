/* Индекс слайда по умолчанию */
var slideIndex = 1;
var len;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    len = slides.length;
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex%len].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

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
        delay: 2000,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});