// Пишемо свій слайдер зображень.
// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
const image = document.querySelector(".image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

function showImage() {
    image.src = images[currentIndex];

    if (currentIndex === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    if (currentIndex === images.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
};

prevBtn.addEventListener("click", () => {
    currentIndex--;
    showImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    showImage();
});

showImage();
