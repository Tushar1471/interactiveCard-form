let form = document.querySelector("form");
let atmNum = document.getElementById("atmNum");
let readName = document.getElementById("readName");
let readMonth = document.getElementById("readMonth");
let readYear = document.getElementById("readYear");
let readCvc = document.getElementById("readCvc");
let appCred = document.getElementById("showApproveCred");


function onInput() {
    let inputAtm = document.querySelector("#card_number");
    let inputAtmNo = inputAtm.value;
    inputAtmNo.length > 16 ? document.getElementById("showError").style.display = "block" : document.getElementById("showError").style.display = "none";

    atmNum.value = inputAtmNo.slice(0, 4) + "  " + inputAtmNo.slice(4, 8) + "  " + inputAtmNo.slice(8, 12) + "  " + inputAtmNo.slice(12, 16);
}

function onInputName() {
    let inputName = document.getElementById("card_holder_name").value;
    readName.value = inputName;
}

function onInputMonth() {
    let inputMonth = document.getElementById("month").value;
    readMonth.value = inputMonth;
}

function onInputYear() {
    let inputYear = document.getElementById("year").value;
    readYear.value = inputYear;

}

function onInputCvc() {
    let inputCvc = document.getElementById("cvc");
    let cvcVal = inputCvc.value;
    cvcVal.length == 0 ? inputCvc.style.background = "red" : inputCvc.style.background = "white";
    readCvc.value = cvcVal;
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.style.display = "none";
    appCred.style.display = "block";
})