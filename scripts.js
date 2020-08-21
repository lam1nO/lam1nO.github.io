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

var card = document.querySelectorAll(".spec__wrapper");
const cards1 = document.querySelector(".spec__wrapper1");
const cards2 = document.querySelector(".spec__wrapper2");
const cards3 = document.querySelector(".spec__wrapper3");
const cards4 = document.querySelector(".spec__wrapper4");
const cards5 = document.querySelector(".spec__wrapper5");
const cards6 = document.querySelector(".spec__wrapper6");

var i

for (i = 0; i < card.length; i++)
{
    console.log(card[i]);
    card[i].addEventListener('click', function()
    {
        card[i].classList.add("spec__wrapper--clicked");
    });
}

// cards1.addEventListener('click', function(){func(cards1)});
// cards2.addEventListener('click', function(){func(cards2)});
// cards3.addEventListener('click', function(){func(cards3)});
// cards4.addEventListener('click', function(){func(cards4)});
// cards5.addEventListener('click', function(){func(cards5)});
// cards6.addEventListener('click', function(){func(cards6)});

const hi = document.querySelector(".hello");

hi.addEventListener('click', back);

function func(cards){
    console.log(cards);
    cards.classList.add("spec__wrapper--clicked");
    
    // cards.classList.remove("spec__wrapper--clicked");
}

function back(){
    hi.parentElement.classList.remove("spec__wrapper--clicked");
    console.log(hi.parentElement);
}

// for (i = 0; i < cards.length; i+=1)
// {    
//     cards[i].addEventListener("click", func(cards[i]));
// }

// function func(x){
//     x.classList.add("spec__wrapper--clicked");
// }
