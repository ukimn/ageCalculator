const inputForm = document.querySelector(".inputForm");
const submitButton = document.querySelector(".submit-button");
const deleteButton = document.querySelector(".delete-button");
const pOne = document.querySelector(".pOne");
const pTwo = document.querySelector(".pTwo");

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle burger menu and navigation links
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    burger.classList.toggle('open');
});



submitButton.addEventListener('click', function(){
    let age = Number(inputForm.value);

    let date = new Date();
    let mDate = date.getFullYear()

    const meladi = mDate - age;
    const hijri = 1446 - age;

    pOne.textContent = meladi;
    pTwo.textContent = hijri;
})

deleteButton.addEventListener('click', function(){
    inputForm.value = "";
    pOne.textContent = "هجري";
    pTwo.textContent = "ميلادي"
})