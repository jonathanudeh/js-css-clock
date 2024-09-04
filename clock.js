const secHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");

const clockMovement = () => {
    const now = new Date();

    const secondsDegree = ((now.getSeconds() / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutesDegree = ((now.getMinutes() / 60) * 360) + 90; 
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hoursDegree = ((now.getHours() / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    console.log(minutes)
}

setInterval(clockMovement, 1000)




