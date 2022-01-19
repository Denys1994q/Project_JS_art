const mask = () => {
    let phoneInputs = document.querySelectorAll('[name="phone"]');
        phoneInputs.forEach(item => {
            let i = 0;
                item.addEventListener('input', () => {
                    // item.value - це те, що вводить користувач. Але воно має пройти через матрицю і тільки тоді показатися на сторінці 
                    // item.value.charAt(i++) - показує в item.value не всі символи, а по одному по черзі. тобто, воно по одному передає в матрицю, щоб одна цифра заміняла одну _  

                    let matrix = '380 (__) ___ __ __'; // 19 символів 
                    let onlyDigitsInput = item.value.replace(/\D/g, '');  
                    let def = matrix.replace(/\D/g, '');

                    if (def.length > onlyDigitsInput.length) {
                        onlyDigitsInput = def;
                    }
                    
                    
                    item.value = matrix.replace(/./g, function(a) {
                        if (/[_\d]/.test(a) && i < onlyDigitsInput.length) {
                            i++;
                            console.log(1)
                            return onlyDigitsInput; 
                        }
                        // else if (/[_\d]/.test(a) && i > onlyDigitsInput.length) {
                        //     console.log(2)
                        //     return 'k';
                        // }
                        else {
                            console.log(3)
                            return a;
                        }
                    })
                    // console.log(onlyDigitsInput)
                });
        });
      


















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