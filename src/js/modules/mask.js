const mask = () => {
    let phoneInputs = document.querySelectorAll('[name="phone"]');
            // треба форматувати дані, які вводить користувач
            // якщо не цифри - заміняти на пусті строки 
            // і підставляти цифри в маску 

        // let getInputNumbersValue = function(input) {
        //     return input.value.replace(/\D/g, '');
        // }

        // let onPhoneInput = function(e) {
        //     let input = e.target;
        //     let inputNumbersValue = getInputNumbersValue(input);
            
        //     console.log(inputNumbersValue);
        // }

        // phoneInputs.forEach(item => {
        //     item.addEventListener('input', onPhoneInput);
        // })
        let matrix = '+3 80 __ __ ___ __'
        phoneInputs.forEach(item => {
            item.addEventListener('input', () => {
                // item.value = item.value.replace(/\D/g, ''); // всі НЕ цифри в на сторінці в інпуті замінено на пусті знаки
                // let onlyDigitsInput = item.value.replace(/\D/g, ''); // змінна, в якій лише цифри 

                // item.value - це те, що буде вводиться на сторінці. Тобто, тут можна робити перевірки: якщо вводить не цифру - пуста стрічка. Беремо за основу матрицю і замінюємо в ній значення на ті, які ввів користувач. 
                // item.value = matrix.replace(/./, function(a) {
           
                // });
                item.value = matrix.replace(/./g, function(a) {
                    if (/_/.test(a)) {
                        return 9; // замінило _ на 9
                    }
                   
                });


            });
        })


        // let matri = '+3 80 __ __ ___ __';

        // let x = matri.replace(/[_]/g, '6')
        // console.log(x)



























    // function createMask(event) {
    //     let matrix = '+7 (___) ___ __ __',
    //     i = 0,
    //     def = matrix.replace(/\D/g, ''), // значення за замовчуванням 
    //     val = this.value.replace(/\D/g, ''); // значення, яке вводить користувач 

    //     // щоб користувач не міг стирати +7
    //     if (def.length >= val.length) {
    //         val = def;
    //     }

    //     // беремо те, що вводить користувач і поміщаємо на сторінку після певних перевірок 
    //     // замінюємо _ на цифри, які вводить користувач
    //     this.value = matrix.replace(/./g, function(a) {
    //         // якщо ці дві умови виконуються, тоді просто беремо наступний символ (val.charAt(i++), якщо ні - заміняємо 
    //         return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    //         // if (/[_\d]/.test(a) && i < val.length) {
    //         //     val.charAt(i++);
    //         //     if (i >= val.length) {
    //         //         '';
    //         //     } else {
    //         //         return a;
    //         //     }
    //         // }
    //     });
    // };

};

export default mask;