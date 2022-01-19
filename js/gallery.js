const previewBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const gallery = document.querySelector(".gallery__img");
let counter = 0;

const prev = () => {
    if(counter === 0) {
        return;
    };
    counter--;
    gallery.children[0].classList.remove("appear");
    gallery.children[0].classList.add("disappear");
    gallery.children[1].classList = "active-prev";
}

const next = () => {
    if(counter === 1) {
        return;
    };
    counter++;
    gallery.children[0].classList.remove("disappear");
    gallery.children[0].classList.add("appear");
    gallery.children[1].classList = "active-next";
}

previewBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);