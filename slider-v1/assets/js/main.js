const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll('.slider img');
const iconSlider = document.querySelector('.icon-slider');
const iconImgs = document.querySelectorAll('.icon-slider img');

let i = 0;
let width = imgs[i].clientWidth;
let iconwidth = iconImgs[i].clientWidth;

iconImgs[0].style.borderColor = `gray`;
change();
function change() {
    next.addEventListener('click', () => {
        i++;
        slider.style.transform = `translate(${-i * width}px)`;
        if (i >= 7) {
            iconImgs[8].style.borderColor = `whitesmoke`;
        }
        if (i < 5) {
            iconSlider.style.transform = `translate(${-i * (iconwidth + 12.5)}px)`;
        }
        if (i > imgs.length - 1) {
            i = -1;
            i++;
            slider.style.transform = `translate(${-i * width}px)`;
            if (i < 5) {
                iconSlider.style.transform = `translate(${-i * (iconwidth + 12.5)}px)`;
            }
        }
        if (i <= iconImgs.length - 1) {
            iconImgs[i].style.borderColor = `gray`;
            iconImgs[i - 1].style.borderColor = `whitesmoke`;
        }
    })
    prev.addEventListener('click', () => {
        i--;
        slider.style.transform = `translate(${-i * width}px)`;
        iconSlider.style.transform = `translate(${-i * (iconwidth + 12.5)}px)`;
        if (i < 0) {
            i = imgs.length;
            i--;
            slider.style.transform = `translate(${-i * width}px)`;
            iconSlider.style.transform = `translate(${-i * (iconwidth + 12.5)}px)`;
        }
        if (i <= iconImgs.length - 1) {
            iconImgs[i].style.borderColor = `gray`;
            iconImgs[i + 1].style.borderColor = `whitesmoke`;
        }
    })
}

