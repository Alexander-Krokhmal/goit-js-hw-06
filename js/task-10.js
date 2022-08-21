function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCollection = document.querySelector('#boxes');

const ref = {
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
};
console.dir(ref.create);
console.dir(ref.input);

ref.create.addEventListener('click', onInputClick);   //add listner on btn to create div
ref.destroy.addEventListener('click', destroyBoxes);   //add listner on btn and destroy add boxes


function onInputClick(event) {    //add elemetns on click
  const newDiv = ref.input.value;
  console.log(newDiv);
  console.log(ref.input);

  createBoxes(newDiv);
}

function createBoxes(amount) {

  const width = 30;
  const height = 30;

  const elements = [];  //massive of add elements
  
  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement('div');
    divEl.classList.add('box');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${width + i * 10}px`;
    divEl.style.height = `${height + i * 10}px`;

    elements.push(divEl);   //add elements in massive
  }
  btnCollection.append(...elements);  //add div in html
}

function destroyBoxes() {
  btnCollection.innerHTML = '';
}


/**
 * Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 */