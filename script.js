const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');

const result = document.getElementById('result');

btnPlus.onclick = function() {
    const sum = Number(num1.value) + Number(num2.value);
    result.textContent = "Результат: " + sum;
};

btnMinus.onclick = function() {
    const minus = Number(num1.value) - Number(num2.value);
    result.textContent = "Результат: " + minus;
};

btnMultiply.onclick = function() {
    const multiply = Number(num1.value) * Number(num2.value);
    result.textContent = "Результат: " + multiply;
};

btnDivide.onclick = function() {
    const divide = Number(num1.value) / Number(num2.value);
    result.textContent = "Результат: " + divide;
};