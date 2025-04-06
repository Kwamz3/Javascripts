
const myCheckBox = document.getElementById("myCheckBox");
const myVisaBtn = document.getElementById("myVisaBtn");
const myMasterCardBtn = document.getElementById("myMasterCardBtn");
const myPaypalBtn = document.getElementById("myPaypalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const result = document.getElementById("result");
const payment = document.getElementById("payment");

mySubmitBtn.onclick = function () {
    if (myCheckBox.checked) {
        result.textContent = `You are subscribed`;
    }
    else {
        result.textContent = `You are not subscribed`;
    }

    if (myVisaBtn.checked) {
        payment.textContent = `You have selected Visa`;
    }
    else if (myMasterCardBtn.checked) { 
        payment.textContent = `You have selected MasterCard`;
    }
    else if (myPaypalBtn.checked) { 
        payment.textContent = `You have selected Paypal`;
    }
    else {
        payment.textContent = `You have not selected any payment`;
    }
}