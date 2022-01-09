// import checkNumInputs from './checkNumInputs';

const forms = () => {
    // 1. Просто зібрати всі форми 
    // 2. Відправити форми на сервер 
    // - зробити fetch запрос з методом POST 
    // 3. Сповістити користувача про результат відправки даних 

    const form = document.querySelectorAll('form'), // 1. знайшли всі форми 
          input = document.querySelectorAll('input'); // 3. знайшли всі інпути

    // checkNumInputs('input[name="user_phone"]');

    const message = { // 3.
        loading: 'загрузка...',
        success: 'Дякую! Ми з вами звяжемося',
        failure: 'Щось пішло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    }

    const path = { // 2.
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }

    const postData = async (url, data) => { // 2.
        let res = await fetch(url, {
            method: 'Post',
            body: data
        });
        return await res.text();
    };

    form.forEach(item => { // 2.
        item.addEventListener('submit', (e) => {
            e.preventDefault()

            // додаємо формі анімацію і приховуємо її через 4 мілісекунди після кліку на сабміт 
            item.classList.add('animated', 'fadeOutUp'); 
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            // створюємо головний div для повідомлення
            let statusMessage = document.createElement('div'); // 3.
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);
            // створюємо всередині головного діву картинку (спінер, що йде загрузка)
            let statusImg = document.createElement('img'); 
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);
            // створюємо всередині головного діву текстовий блок (слово "загрузка")
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item); // 2.
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            const clearInputs = () => { // 3.
                input.forEach(item => item.value = '')
            }

            postData(api, formData) // 2.
            .then(res => {
                console.log(res);
                statusImg.setAttribute('src', message.ok); // 3.
                textMessage.textContent = message.success; // 3.
            })
            .catch(() => {
                statusImg.setAttribute('src', message.fail); // 3.
                textMessage.textContent = message.failure; // 3.
            })
            .finally(() => {
                clearInputs(); // 3.
                // setTimeout(() => { // 3.
                //     statusMessage.remove();
                //     item.style.display = 'block';
                //     item.classList.remove('fadeOutUp');
                //     item.classList.remove('fadeInUp');
                // }, 2200)
            })
        })
    })
}



export default forms;