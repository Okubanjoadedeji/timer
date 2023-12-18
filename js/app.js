


const countDown = document.getElementById("countdown");


function updateCountdown(){
  let date = new Date();
  let offset = date.getTimezoneOffset(); 
  const seconds = Math.floor(date / 1000) % 60;
  const minutes = Math.floor(date / 1000 / 60) % 60;
  const hours = Math.floor(date / 1000 / 60 / 60) % 24;

  countDown.innerHTML = `${hours} hrs, ${minutes} min, ${seconds} sec`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
