import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailTyped = document.querySelector('[name="email"]');
const messageTyped = document.querySelector('[name="message"]')


feedbackForm.addEventListener('input', throttle(typeData, 500));
feedbackForm.addEventListener('submit', submitForm);

function typeData() {
    const email = emailTyped.value;
    const message = messageTyped.value;
    const formData = {
        email,
        message,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function submitForm(event){
    event.preventDefault();
    const email = emailTyped.value;
    const message = messageTyped.value;
    const formData = {
        email,
        message,
    };
    console.log(formData);
    feedbackForm.reset();
    localStorage.clear();

}