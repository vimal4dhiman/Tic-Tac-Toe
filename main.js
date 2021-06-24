const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const btn6 = document.querySelector('.btn-6');
const btn7 = document.querySelector('.btn-7');
const btn8 = document.querySelector('.btn-8');
const btn9 = document.querySelector('.btn-9');
const reset = document.querySelector('.reset');
const tab = document.querySelector('.table')

let count = 0;
let table = ['', '', '', '', '', '', '', '', ''];

const rand = Math.trunc(Math.random() * 9 + 1)
console.log(rand);

const checking = (table, icon) => {
    if ((table[0] === icon && table[1] === icon && table[2] === icon) ||
        (table[3] === icon && table[4] === icon && table[5] === icon) ||
        (table[6] === icon && table[7] === icon && table[8] === icon) ||
        (table[0] === icon && table[3] === icon && table[6] === icon) ||
        (table[1] === icon && table[4] === icon && table[7] === icon) ||
        (table[2] === icon && table[5] === icon && table[8] === icon) ||
        (table[0] === icon && table[4] === icon && table[8] === icon) ||
        (table[2] === icon && table[4] === icon && table[6] === icon)) {
        // console.log(`Won the match`)
        return true;
    }
}

const init = function() {
    table = ['', '', '', '', '', '', '', '', '']
    count = 0;
    btn1.innerHTML = '';
    btn2.innerHTML = '';
    btn3.innerHTML = '';
    btn4.innerHTML = '';
    btn5.innerHTML = '';
    btn6.innerHTML = '';
    btn7.innerHTML = '';
    btn8.innerHTML = '';
    btn9.innerHTML = '';
}

init();
const dataSets = function(btn, icon) {
    btn.innerHTML = '';
    btn.innerHTML = icon;
    if (checking(table, icon)) {
        console.log(`Victory`)
        init();
    }
}
const oddEvenCheck = count => count % 2 == 0 ? 'X' : 'O';

reset.addEventListener('click', init)

btn1.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    table[0] = icon;
    dataSets(btn1, icon);
    // table[0] !== '' ? count++ : count = count;
    count++;
    console.log(count)
}, table[0] !== '' ? { once: true } : { once: false })


btn2.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    table[1] = icon;
    count++;
    dataSets(btn2, icon);
}, table[1] !== '' ? { once: true } : { once: false })

btn3.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    count++;
    table[2] = icon;
    dataSets(btn3, icon);
}, table[2] !== '' ? { once: true } : { once: false })

btn4.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    count++;
    table[3] = icon;
    dataSets(btn4, icon);
}, table[3] !== '' ? { once: true } : { once: false })

btn5.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    count++;
    table[4] = icon;
    dataSets(btn5, icon);
}, table[4] !== '' ? { once: true } : { once: false })

btn6.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    count++;
    table[5] = icon;
    dataSets(btn6, icon);
}, table[5] !== '' ? { once: true } : { once: false })

btn7.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    count++;
    table[6] = icon;
    dataSets(btn7, icon);
}, table[6] !== '' ? { once: true } : { once: false })

btn8.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    count++;
    table[7] = icon;
    dataSets(btn8, icon);
}, table[7] !== '' ? { once: true } : { once: false })

btn9.addEventListener('click', function() {
    const icon = oddEvenCheck(count);
    count++;
    table[8] = icon;
    dataSets(btn9, icon);
}, table[8] !== '' ? { once: true } : { once: false })