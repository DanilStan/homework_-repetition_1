const form = document.querySelector(".login-form");

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const formEvent = event.target;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if(email === '' || password === '') {
        return alert('Please try again')
    }
    
    const objectValue = {
        email,
        password
    }

    console.log(objectValue)
    formEvent.reset();
}

