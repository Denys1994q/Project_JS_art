import {getResource} from '../services/requests';

const calc = (state) => {
    let size = document.querySelector('#size');
    let material = document.querySelector('#material');
    let options = document.querySelector('#options');
    let price = document.querySelector('.calc-price');
    let promocode = document.querySelector('.promocode');
    let s;
    let m;
    let o = 0;
    
    let sum = 0;

    size.addEventListener('change', () => {
        getResource('http://localhost:3000/size')
        .then(res => calcSize(res))
        state.size = size.value;
        const calcSize = (result) => {
            if (size.value == 'small') {
                s = result.small;
                find()
            }
            else if (size.value == 'medium') {
                s = result.medium;
                find()
            }
            else if (size.value == 'big') {
                s = result.big;
                find()
                
            }
            else if (size.value == 'large') {
                s = result.large;
                find()
            }
        }
    });

    material.addEventListener('change', () => {
        getResource('http://localhost:3000/material')
        .then(res => calcMaterial(res))
        state.material = material.value;
        const calcMaterial = (result) => {
            if (material.value == 'first') {
                m = result.first;
                find()
            }
            else if (material.value == 'second') {
                m = result.second;
                find()
            }
            else if (material.value == 'third') {
                m = result.third;
                find()
            }
        }
    })

    options.addEventListener('change', () => {
        getResource('http://localhost:3000/options')
        .then(res => calcOptions(res))
        state.options = options.value;
        const calcOptions = (result) => {
            if (options.value == 'gel') {
                o = result.gel;
                find()
            }
            else if (options.value == 'express') {
                o = result.express;
                find()
            }
            else if (options.value == 'delivery') {
                o = result.delivery;
                find()
            }
        }
    })
    promocode.addEventListener('input', find);

    function find() {
        sum = s + m + o;
        state.price = sum;
        if (s === undefined || m === undefined) {
            price.textContent = 'Будь ласка, виберіть розмір та матеріал картини';
        } else if (promocode.value === 'IWANTPOPART') {
            price.textContent = Math.round(sum*0.7);
        } else { // в else записувати основну дію. 
            price.textContent = sum;
        }
    }
};

export default calc;