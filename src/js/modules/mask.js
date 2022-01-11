const mask = (selector) => {
    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''), // значення за замовчуванням 
        val = this.value.replace(/\D/g, ''); // значення, яке вводить користувач 

        // щоб користувач не міг стирати +7
        if (def.length >= val.length) {
            val = def;
        }

        // беремо те, що вводить користувач і поміщаємо на сторінку після певних перевірок 
        // замінюємо _ на цифри, які вводить користувач
        this.value = matrix.replace(/./g, function(a) {
            // якщо ці дві умови виконуються, тоді просто беремо наступний символ (val.charAt(i++), якщо ні - заміняємо 
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            // if (/[_\d]/.test(a) && i < val.length) {
            //     val.charAt(i++);
            //     if (i >= val.length) {
            //         '';
            //     } else {
            //         return a;
            //     }
            // }
        });

    };

};

export default mask;