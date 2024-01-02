let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let date_str = document.getElementById("date");

const update = ()=> {
    let currentTime = new Date();
    let date = currentTime.toDateString();

    date_str.innerHTML = date;
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}

setInterval(update, 1000)
