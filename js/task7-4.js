// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let value = 0;

function decrement() {
    value -= 1;
    render();
}

function increment() {
    value += 1;
    render();
}

function render() {ref.counterValue.textContent = value;}

const ref = {
    decrementBtn: document.querySelector('#counter button[data-action="decrement"]'),
    incrementBtn: document.querySelector('#counter button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
};

ref.decrementBtn.addEventListener('click', decrement);

ref.incrementBtn.addEventListener('click', increment);
