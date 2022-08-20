const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

let currentName = 'Anonymous';

textInput.addEventListener("input", (event) => {
    console.log(event.currentTarget.value);  //enter text
    console.log(textOutput.textContent);  // при '' = Anonymous

    // textOutput.textContent = event.currentTarget.value;
    // if (event.currentTarget.value === '') {
    //     textOutput.textContent = 'Anonymous';
    // };

    textOutput.textContent = event.currentTarget.value === '' ? currentName : event.currentTarget.value;
});
// console.log(textOutput.textContent);


/**
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
 */