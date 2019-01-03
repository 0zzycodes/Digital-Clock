let hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
  document.querySelector("#greeting").innerHTML = "Good Morning";
} else if (hour >= 12 && hour < 18) {
  document.querySelector("#greeting").innerHTML = "Good Afternoon";
} else {
  document.querySelector("#greeting").innerHTML = "Good Evening";
}

if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
else console.log("Good Evening");

setInterval(function() {
  let date = new Date();
  updateTime(date);
}, 1000);

function updateTime(date) {
  let hour = document.querySelector(".hour");
  let minutes = document.querySelector(".min");
  let seconds = document.querySelector(".sec");
  let hourDiv = date.getHours();
  let minDiv = date.getMinutes();
  let secDiv = date.getSeconds();
  hour.innerHTML = hourDiv;
  minutes.innerHTML = minDiv;
  seconds.innerHTML = secDiv;
  // let timeDiv = document.querySelector('#clock');
  // let time = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
  // timeDiv.innerHTML = time;
}
