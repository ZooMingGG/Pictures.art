const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1;
    let timerId;

    const items = document.querySelectorAll(slides);

    const showSlides = (index) => {
        if (index > items.length) {
            slideIndex = 1;
        }

        if (index < 1) {
            slideIndex = items.length;
        }

        items.forEach((item) => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    };

    showSlides(slideIndex);

    const changeSlide = (index) => {
        showSlides(slideIndex += index);
    };

    const autoSlide = (time) => {
        timerId = setInterval(() => {
            changeSlide(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        }, time);
    };

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            clearInterval(timerId);

            changeSlide(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');

            autoSlide(7000);
        });

        nextBtn.addEventListener('click', () => {
            clearInterval(timerId);

            changeSlide(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');

            autoSlide(7000);
        });
    } catch(error) {}

    if (direction === 'vertical') {
        setInterval(() => {
            changeSlide(1);
            items[slideIndex - 1].classList.add('slideInDown');
        }, 5000);
    } else {
        autoSlide(7000);
    }
};

export default sliders;