const countCategories = document.querySelector('#categories');
console.log('Number of categories: ', countCategories.children.length);


const findTitle = document.querySelectorAll('.item');
findTitle.forEach((title) => {
    console.log('Category: ', title.firstElementChild.textContent);
    console.log('Elements: ', title.lastElementChild.children.length);

})
