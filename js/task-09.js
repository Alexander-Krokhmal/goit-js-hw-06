function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());

const btn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btn.addEventListener('click', onChangeColor);
colorName.addEventListener('click', onChangeNane);

function onChangeColor (event) {
  const body = document.body;
  body.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor());

  colorName.textContent = body.style.backgroundColor;
  // console.log(colorName);
};




/**
 * Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor.
 */