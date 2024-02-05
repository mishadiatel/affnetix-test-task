const form = document.querySelector('form');
const errorMessage = document.querySelector('.subscribe__error-message');
const emailInput = document.querySelector('.subscribe__input');
const playVideoBtn = document.querySelector('.video__play-button');
const videoPopup = document.querySelector('.video__popup');
const closeVideoPopupButton = document.querySelector('.video__close-button');
const videoFrame = document.querySelector('iframe');


playVideoBtn && playVideoBtn.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    videoPopup.classList.remove('closed-popup');
});

closeVideoPopupButton.addEventListener('click', (e) => {
    let iframeSrc = videoFrame.src;
    videoFrame.src = iframeSrc;
    document.body.style.overflow = 'auto';
    videoPopup.classList.add('closed-popup');
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailInput.classList.remove('error');
    errorMessage.innerHTML = '';
    const {email} = form.elements;
    const emailValue = email.value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailValue) {
        showErrorMessage('This field is required.');
        return;
    }
    if (!emailRegex.test(emailValue)) {
        showErrorMessage('Please enter a valid email address.');
    } else {
        form.innerHTML = '<span class="subscribe__success-message">Thanks for contacting us! We will be in touch with you shortly.</span>';
    }

});

function showErrorMessage(message) {
    errorMessage.innerHTML = message;
    emailInput.classList.add('error');
}


