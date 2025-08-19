
const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', e => {
    e.preventDefault();

    const email = formElem.elements.email.value.trim();
    const password = formElem.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const userData = {
        email,
        password,
    };
    console.log(userData);
    formElem.reset();
});