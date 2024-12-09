const daysE1 = document.getElementById('days');
console.log(daysE1);
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minuts");
const secondsE1 = document.getElementById("seconds");

const newYears = "1 jan 2021";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/(24*60*60));
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time<10? `0${time}`:time;
}
setInterval(countDown, 1000);
