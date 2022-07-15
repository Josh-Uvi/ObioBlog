"use strict"
let newsletterForm = document.getElementById("newsletter-form");
let newsletterFormData = {};

const handleSubmit = (e) => {
    e.preventDefault();
    const newsletterInputField = e.target.elements.newsletterInput.value;
    newsletterFormData.email = newsletterInputField;
    newsletterFormData.time = new Date().toLocaleString();
    const newObj = JSON.stringify(newsletterFormData)
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(newObj).toString(),
    };

    console.log("formData: " + newObj)

    fetch('/', options)
        .then(function () {
            newsletterForm.innerHTML = `<div">Almost there! Check your inbox for a confirmation e-mail.</div>`;
            newsletterForm.reset();
        })
        .catch(function (error) {
            console.error(error);
        });

    return false;
};


if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleSubmit)
}

