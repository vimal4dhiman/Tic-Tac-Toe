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

let count = 0;
let table = ['', '', '', '', '', '', '', '', ''];

const rand = Math.trunc(Math.random() * 9 + 1)
console.log(rand);

// Functions
const checking = (table, icon) => {
    if ((table[0] === icon && table[1] === icon && table[2] === icon) ||
        (table[3] === icon && table[4] === icon && table[5] === icon) ||
        (table[6] === icon && table[7] === icon && table[8] === icon) ||
        (table[0] === icon && table[3] === icon && table[6] === icon) ||
        (table[1] === icon && table[4] === icon && table[7] === icon) ||
        (table[2] === icon && table[5] === icon && table[8] === icon) ||
        (table[0] === icon && table[4] === icon && table[8] === icon) ||
        (table[2] === icon && table[4] === icon && table[6] === icon)) {
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
    btn1.addEventListener('click', table_1_Check, true);
    btn2.addEventListener('click', table_2_Check, true);
    btn3.addEventListener('click', table_3_Check, true);
    btn4.addEventListener('click', table_4_Check, true);
    btn5.addEventListener('click', table_5_Check, true);
    btn6.addEventListener('click', table_6_Check, true);
    btn7.addEventListener('click', table_7_Check, true);
    btn8.addEventListener('click', table_8_Check, true);
    btn9.addEventListener('click', table_9_Check, true);
}

const dataSets = function(btn, icon) {
    btn.innerHTML = '';
    btn.innerHTML = icon;
    if (checking(table, icon)) {
        setTimeout(() => {
            alert(`Victory!! Player ${icon} won`)
            init();
        }, 500);
    }
}

const oddEvenCheck = count => count % 2 == 0 ? 'X' : 'O';

const table_1_Check = function() {
    const icon = oddEvenCheck(count);
    dataSets(btn1, icon);
    table[0] = icon;
    count++;
    btn1.removeEventListener('click', table_1_Check, true);
}

const table_2_Check = function() {
    const icon = oddEvenCheck(count);
    table[1] = icon;
    count++;
    dataSets(btn2, icon);
    btn2.removeEventListener('click', table_2_Check, true)
};

const table_3_Check = function() {
    const icon = oddEvenCheck(count);
    count++;
    table[2] = icon;
    dataSets(btn3, icon);
    btn3.removeEventListener('click', table_3_Check, true);
};

const table_4_Check = function() {
    const icon = oddEvenCheck(count);
    count++;
    table[3] = icon;
    dataSets(btn4, icon);
    btn4.removeEventListener('click', table_4_Check, true);
};

const table_5_Check = function() {
    const icon = oddEvenCheck(count);
    count++;
    table[4] = icon;
    dataSets(btn5, icon);
    btn5.removeEventListener('click', table_5_Check, true);
};

const table_6_Check = function() {
    const icon = oddEvenCheck(count);
    count++;
    table[5] = icon;
    dataSets(btn6, icon);
    btn6.removeEventListener('click', table_6_Check, true);
};

const table_7_Check = function() {
    const icon = oddEvenCheck(count);
    count++;
    table[6] = icon;
    dataSets(btn7, icon);
    btn7.removeEventListener('click', table_7_Check, true);
};

const table_8_Check = function() {
    const icon = oddEvenCheck(count);
    count++;
    table[7] = icon;
    dataSets(btn8, icon);
    btn8.removeEventListener('click', table_8_Check, true);
};

const table_9_Check = function() {
    const icon = oddEvenCheck(count);
    count++;
    table[8] = icon;
    dataSets(btn9, icon);
    btn9.removeEventListener('click', table_9_Check, true);
};

//Event listeners
reset.addEventListener('click', init);

btn1.addEventListener('click', table_1_Check, true);

btn2.addEventListener('click', table_2_Check, true);

btn3.addEventListener('click', table_3_Check, true);

btn4.addEventListener('click', table_4_Check, true);

btn5.addEventListener('click', table_5_Check, true);

btn6.addEventListener('click', table_6_Check, true);

btn7.addEventListener('click', table_7_Check, true);

btn8.addEventListener('click', table_8_Check, true);

btn9.addEventListener('click', table_9_Check, true);