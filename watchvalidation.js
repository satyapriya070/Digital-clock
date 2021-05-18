function DigitalClock(){
    let date=new Date();
    let hour= date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();

    document.getElementById("template").innerHTML=
    `${hour}: ${minutes}:${second}`;
}

setInterval(()=>{
    DigitalClock();
}, 1000)