const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = formEl.elements.email.value.trim();
    const password = formEl.elements.password.value.trim();

    const userData = {
        email: email,
        password: password,
    };

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    };

    console.log(userData);
    

    formEl.reset();
})
