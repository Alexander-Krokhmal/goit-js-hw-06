const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElemets = event.currentTarget.elements;

    // console.log('submit');
    // console.log(event);
    // console.log(formElemets);

    const email = formElemets.email.value;
    const password = formElemets.password.value;

    const formData = {
        email,
        password,
    };

    if (email === '' || password === '') {
        return alert('Need to fill all the fields!' )
    }

    console.log(formData);
    event.currentTarget.reset();
}



/* 
- Обработка отправки формы form.login-form должна быть по событию 'submit'.
- При отправке формы страница не должна перезагружаться.
- Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство 'elements'.
- Если в форме есть незаполненные поля, выводи 'alert' с предупреждением о том, что все поля должны быть заполнены.
- Выведи обьект с введенными данными в консоль и очисти значения полей формы методом 'reset'.
*/