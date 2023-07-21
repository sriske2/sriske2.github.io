
const milliToSec = 1000;
const secToMin = 60;
const MinToHour = 60;
const HourToDay = 24;

let resultBox = document.getElementById("result");
let datePicker = document.getElementById("datepicker");

datePicker.addEventListener("change", (e) => {
    let dateStr = e.target.value;
    let then = new Date(dateStr);
    let now = new Date();
    let now_clean = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now_clean - then;
    let result = Math.floor(diff / (milliToSec * secToMin * MinToHour * HourToDay));
    resultBox.textContent = result;

});