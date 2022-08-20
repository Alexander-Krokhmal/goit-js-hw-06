let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn() {
    counterValue -= 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;

}
function onClickIncrementBtn() {
    counterValue += 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
}


/**
 * Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.


* Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
* Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
* Обновляй интерфейс новым значением переменной counterValue.
 */