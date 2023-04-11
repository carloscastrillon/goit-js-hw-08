import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailTyped = document.querySelector('[name="email"]');
const messageTyped = document.querySelector('[name="message"]')


feedbackForm.addEventListener('input', throttle(typeData, 500));
feedbackForm.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', domContentLoaded );

function typeData() {
    const email = emailTyped.value;
    const message = messageTyped.value;
    const feedbackFormData = {
        email,
        message,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
};

function submitForm(event){
    event.preventDefault();
    const email = emailTyped.value;
    const message = messageTyped.value;
    const feedbackFormData = {
        email,
        message,
    };
    console.log(feedbackFormData);
    feedbackForm.reset();
    localStorage.clear();

}

function domContentLoaded() {
    try {
    const localStorageData = JSON.parse(localStorage.getItem('feedback-form-state'));
    
    if (localStorageData) {
        emailTyped.value = localStorageData.email;
        messageTyped.value = localStorageData.message;
    }
} catch (error) {
    console.error("Set state error: ", error.message);
  }
};

