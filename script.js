
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
// 

let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, );
});

document.addEventListener('DOMContentLoaded', function() {
  var num1 = Math.floor(Math.random() * 20);
  var num2 = Math.floor(Math.random() * 20);
  document.getElementById('captcha-question').textContent = num1 + " + " + num2 + " = ";

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      var userAnswer = parseInt(document.getElementById('captcha').value);
      if (userAnswer !== num1 + num2) {
          alert('Incorrect captcha answer. Please try again.');
          event.preventDefault();
      }
  });
});

let slideIndex = 0;
let autoSlideInterval;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
    showSlides(slideIndex += n);
    resetAutoSlide();
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
    autoSlideInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds
});
