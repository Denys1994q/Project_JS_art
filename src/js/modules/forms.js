// import checkNumInputs from './checkNumInputs';
import {postData} from '../services/requests'

const forms = (state) => {
    // 1. Просто зібрати всі форми 
    // 2. Відправити форми на сервер 
    // - зробити fetch запрос з методом POST 
    // 3. Сповістити користувача про результат відправки даних 

    const form = document.querySelectorAll('form'), // 1. знайшли всі форми 
          input = document.querySelectorAll('input'), // 3. знайшли всі інпути
          upload = document.querySelectorAll('[name="upload"]');

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

    const clearInputs = () => { // 3. Очистка інпутів після відправки форми 
        input.forEach(item => item.value = '');
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    }

    upload.forEach(item => { // 3. Для обрізки назви файла, який завантажується 
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        })
    });

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
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

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
                setTimeout(() => { // 3.
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('fadeOutUp');
                    item.classList.remove('fadeInUp');
                }, 2200)
            })
        })
    })
}



export default forms;