//our love
const dayslove = document.getElementById("day");
const hourslove = document.getElementById("hour");
const minslove = document.getElementById("min");
const secondslove = document.getElementById("second");



const loveYear = "2025-12-27T00:00:00";

function loveday(){
    const loveDate =  new Date(loveYear);
    const currentloveDate = new Date();
    
    const totalsecond = (currentloveDate - loveDate) /1000;

    const day = Math.floor(totalsecond / 3600 / 24);
    const hour = Math.floor(totalsecond/ 3600)%24;
    const min = Math.floor(totalsecond/60)%60;
    const second = Math.floor(totalsecond)%60;

    dayslove.innerHTML = day;
    hourslove.innerHTML = formatTimes(hour);
    minslove.innerHTML = formatTimes(min);
    secondslove.innerHTML = formatTimes(second);  
}
function formatTimes(time){
    return time < 10 ? `0${time}` :time;
}
// intail call
loveday();

setInterval(loveday, 1000);
