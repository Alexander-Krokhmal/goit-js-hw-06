const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentSelector = document.querySelector('#ingredients');

const massiveWithSelector = [];

for (let i = 0; i < ingredients.length; i += 1){
  const addSelectorLi = document.createElement('li');
  addSelectorLi.classList.add('item');
  addSelectorLi.textContent = ingredients[i];
  console.log(addSelectorLi);

  massiveWithSelector.push(addSelectorLi);
}

parentSelector.append(...massiveWithSelector);
