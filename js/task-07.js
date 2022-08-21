const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// inputEl.value = "16";
console.dir(textEl);
console.log(inputEl.value);
textEl.style.fontSize = `${inputEl.value}px`;


inputEl.addEventListener('input', (ev) => {
    // console.log(inputEl.value);
    // console.log(ev.currentTarget.value);
    textEl.style.fontSize = `${ev.currentTarget.value}px`;
    // console.log(textEl.style.fontSize);
});
console.log(textEl.style);

// textEl.style.fontSize = '12px';


/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
 */