function DigitalClock(){
    let date=new Date();
    let hour= date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();

    document.getElementById("template").innerHTML=
    `${hour % 12}: ${minutes}:${second} ${hour> 12 ? "PM" : "AM"}`;
}

setInterval(()=>{
    DigitalClock();
}, 1000)
