
// I should have three input fields? mobile optimized too

let then = new Date();
then.setUTCMonth(6);
then.setUTCDate(26);
then.setUTCFullYear(2023);
const now = new Date(2023,7,15);
let diff = now - then;
// console.log(diff);
const milliToSec = 1/1000;
const secToMin = 1/60;
const MinToHour = 1/60;
const HourToDay = 1/24;
let result = diff * milliToSec * secToMin * MinToHour * HourToDay;

let withToday = Math.ceil(result);
let withoutToday = Math.floor(result);
console.log(withToday + ", " + withoutToday);

let resultBox = document.getElementById("result");
let datePicker = document.getElementById("datepicker");

datePicker.addEventListener("change", (e) => {
    console.log("test", e.target.value);
    let dateStr = e.target.value;
    let then = new Date(dateStr);
    let now = Date.now();
    let diff = now - then;
    let result = Math.floor(diff * milliToSec * secToMin * MinToHour * HourToDay);
    console.log(result);
    resultBox.textContent = result;

});