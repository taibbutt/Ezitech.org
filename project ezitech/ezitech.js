let nextbtn = document.querySelector(".rightbtn");
let prebtn = document.querySelector(".leftbtn");
let allcard = document.querySelectorAll(".card");
let count = 0;

allcard.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
    slide.style.transition = "transform 0.5s ease-in-out";  // Add transition for smooth movement
});

const card = function() {
    allcard.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
};

nextbtn.addEventListener("click", function() {
    count++;
    if (count === allcard.length) {
        count = 0;
    }
    card();
});

prebtn.addEventListener("click", function() {
    count--;
    if (count < 0) {
        count = allcard.length - 1;
    }
    card();
});
