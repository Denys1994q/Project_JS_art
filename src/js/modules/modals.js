
const modals = () => {
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        let windowWidth = document.querySelector('#width');
        let windowHeight = document.querySelector('#height');
        let windowProfile = document.querySelectorAll('[type="checkbox"]');
        
        let message = document.createElement('div');
        message.textContent = 'Заповніть всі поля';

        function hide() {
            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.marginRight = '0' + 'px';
                item.classList.add('animated', 'fadeIn')
            })
            
        }
        function show() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }
        
        trigger.forEach(item => { // ф-ія, яка відкриває модалку
            item.addEventListener('click', (e) => {
                btnPressed = true;
                // if (e.target) {
                //     e.preventDefault();
                // }
                if (e.target.classList.contains('popup_calc_button')) {
                    e.preventDefault()
                    if (windowWidth.value !== '' && windowHeight.value !== '') {
                        hide()
                        show()
                    }
                    else {
                        windowWidth.style.border = '1px solid red';
                        windowHeight.style.border = '1px solid red';
                        document.querySelector('.popup_calc_button').insertAdjacentElement('afterEnd', message)
                    }
                }
                else if (e.target.classList.contains('popup_calc_profile_button')) {
                    windowProfile.forEach(elem => {
                        if (elem.checked) {
                            hide()
                            show()
                       }
                       else {
                            document.querySelector('.popup_calc_profile_button').insertAdjacentElement('afterEnd', message)
                       }
                   })
                }
                else if (e.target.classList.contains('fixed-gift')) {
                    document.querySelector('.fixed-gift').style.display = 'none'
                    hide()
                    show()
                    localStorage.setItem('gift', true);
                }
                else {
                    e.preventDefault()
                    hide()
                    show()
                }
            });
        });
 
        close.addEventListener('click', () => { // ф-ія, яка закриває модалку по кліку на хрестик
            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.marginRight = '0' + 'px';
            })
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
        modal.addEventListener('click', (e) => { // ф-ія, яка закриває модалку по кліку на обложку
            if (e.target === modal && closeClickOverlay) {
            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.marginRight = '0' + 'px';
            })
            modal.style.display = 'none';
            document.body.style.overflow = '';
            }
        });
    }
    const scroll = calcScroll();
    function calcScroll() { // штучний блок, щоб забрати загальний скрол при появі всіх модалок
        let div = document.createElement('div');

        div.style.width = '50px'; // будь-яка ширина і висота
        div.style.height = '50px';
        div.style.overflowY = 'scroll'; // штучно задаємо, щоб з'явився скрол
        div.style.visibility = 'hidden'; // щоб ми його не бачили 

        document.body.appendChild(div); // просто кудись вставити
        let scrollWidth = div.offsetWidth - div.clientWidth; // віднімаємо від загальних параметрів блоку (разом зі скролом) його реальні параметри і різниця - це скрол в пікселях
        div.remove();

        return scrollWidth;
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            // робимо так, щоб модалка не відкривалася через якийсь час, якщо вже інша була відкрита користувачем
            // let display;

            // document.querySelectorAll('[data-modal]').forEach(item => {
            //     if (getComputedStyle(item).display !== 'none') { // якщо якесь модальне вікно показується
            //         display = 'block';
            //     }
            // })
            //     if (!display) { // якщо жодне модальне вікно не показується зараз
            //         document.querySelector(selector).style.display = 'block';
            //         document.body.style.overflow = 'hidden';
            //         document.body.style.marginRight = `${scroll}px`;
            //     }

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display == 'none') {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
                }
                else {
                    document.querySelector(selector).style.display = '';
                }
            })
        }, time)
    }
    
    function openByScroll(selector) {
        // pageYOffset - скільки пікселей вже відлистав униз користувач 
        // clientHeight - скільки пікселей зараз бачить користувач на екрані 
        // scrollHeight - всі піксели сторінки загалом 
        
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) ) {
                document.querySelector(selector).click();
            }
        })
    }
   
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
    openByScroll('.fixed-gift')
    
    // showModalByTime('.popup-consultation', 5000);
};

export default modals;