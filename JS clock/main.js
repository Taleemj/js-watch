
setInterval(()=>{

    var deg = 6;
    var hr = document.querySelector('.hr');
    var min = document.querySelector('.min');
    var sec = document.querySelector('.sec');

    var day = new Date();

    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * deg;
    var ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
});