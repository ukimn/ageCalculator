const inputForm = document.querySelector(".inputForm");
const submitButton = document.querySelector(".submit-button");
const deleteButton = document.querySelector(".delete-button");
const pOne = document.querySelector(".pOne");
const pTwo = document.querySelector(".pTwo");

submitButton.addEventListener('click', function(){
    let age = Number(inputForm.value);

    const meladi = 2024 - age;
    const hijri = 1446 - age;

    pOne.textContent = meladi;
    pTwo.textContent = hijri;
})

deleteButton.addEventListener('click', function(){
    inputForm.value = "";
    pOne.textContent = "هجري";
    pTwo.textContent = "ميلادي"
})