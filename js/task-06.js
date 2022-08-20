const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
// const numLength = Number(lineInput.getAttribute("data-length"));

inputEl.addEventListener("blur", (event) => {
    console.log(event.target.value.length);
    // console.log(event.currentTarget.value.length);
    console.log(event.currentTarget);
    console.log(inputEl.dataset.length);

    if (event.target.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    
});

// console.log(inputEl.target);


/**
 * Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.


* Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
* Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
 */