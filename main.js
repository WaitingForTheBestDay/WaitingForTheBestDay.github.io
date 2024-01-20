var dates = [
    {title : "канікул", name : "Канікули", time : "22.01.2024"},
    {title : "навчання", name : "Навчання", time : "12.02.2024"},
    {title : "Пасхи", name : "Пасха", time : "05.05.2024"},
    {title : "сесії", name : "Сесія", time : "27.05.2024"},
]
dates.forEach(element => {
    let date = element.time.split(".");
    let time = `${date[2]}-${date[1]}-${date[0]}`;
    element.utc = new Date(`${time} 00:00:00`).getTime();
});

const now = new Date().getTime();
var countDownDate = 0;

for (let i = 0; i < dates.length; i++) {
    const element = dates[i];
    if (element.utc >= now) {
        countDownDate = element.utc;
        document.getElementById("text-title").textContent = `До ${element.title} залишилось:`;
        break;
    }
}

function surprize() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ"
}

function count() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}д. ${hours}г. ${minutes}хв. ${seconds}сек.`;
    if (distance < 0) {
        document.getElementById("timer").innerHTML = `0д. 0г. 0хв. 0сек.`;
        clearInterval(count_interval);
    }

}

function boubles() {
    const interBubble = document.getElementsByClassName('interactive')[0];
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    
    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }
    
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });
    
    move();  
}


count(); 
var count_interval = setInterval(count, 1000);
document.addEventListener('DOMContentLoaded', boubles);
