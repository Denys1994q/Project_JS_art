const slider = (allSlides, direction, prev, next) => {
    const slides = document.querySelectorAll(allSlides);
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    let n = 0;
    let paused;

    function showSlides() {
        if (n < 0) {
            n = slides.length-1;
        }
        if (n > slides.length-1) {
            n = 0;
        }
        slides.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        })
        slides[n].style.display = 'block';
    }
    showSlides()

    try {
        prevBtn.addEventListener('click', () => {
            n--;
            slides[n].classList.remove('slideInRight');
            slides[n].classList.add('slideInLeft');
            showSlides();
        })
        nextBtn.addEventListener('click', () => {
            n++;
            slides[n].classList.remove('slideInLeft');
            slides[n].classList.add('slideInRight');
            showSlides();
        }) 
    } catch(e) {}

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    })
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    })


    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(() => {
                n++;
                showSlides();
                slides[n].classList.add('slideInDown');
            }, 3000)
        } else {
            paused = setInterval(() => {
                n++;
                showSlides()
                slides[n].classList.remove('slideInRight');
                slides[n].classList.add('slideInLeft');
            }, 3000)
        }
    }
    activateAnimation();
}

export default slider;
