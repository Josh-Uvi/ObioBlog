"use strict"


let newsletterForm = document.getElementById("newsletter-form");
const processForm = form => {
    const data = new FormData(form)
    data.append('form-name', 'newsletter');
    fetch('/', {
        method: 'POST',
        body: data,
    })
        .then(() => {
            form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
        })
        .catch(error => {
            form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
        })
}

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        processForm(newsletterForm)
    })
}

