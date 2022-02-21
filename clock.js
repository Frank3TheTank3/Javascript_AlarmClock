// Script Scetion for THE CLOCK tadaaaaaaaaaaaa

//Declaring Timer Check Bool
let timeHasBeenSet = false;
let timeDateHasBeenSet = false;
let showingCurrentTime = true;

let timehval;
let timemval;
let timesval;
let timedval;

let seconds;
let minutes;
let hours;

let final_timehval;
let final_timemval;
let final_timesval;
let final_timesdval;

let ad_script;
let doctitle = "This is a clock";

setInterval(function () {

  if (showingCurrentTime === true) 
  {
    let daytime = "";
    let zerosec = "0";
    let time = new Date();
    let timeHours = time.getHours();
    let timeMinutes = time.getMinutes();
    let timeSeconds = time.getSeconds();
    let completeSeconds = "";
    let completeMinutes = "";
    let completeHours = "";
    //Time formatt checks
    if (timeHours > 0 && timeHours < 12) {
      daytime = "am";
    } else {
      daytime = "pm";
    }
    completeHours = timeHours.toString().padStart(2, "0");
    completeSeconds = timeSeconds.toString().padStart(2, "0");
    completeMinutes = timeMinutes.toString().padStart(2, "0");
    document.getElementById("textresult").innerHTML = `
                  ${completeHours}
                  :
                  ${completeMinutes}
                  :
                  ${completeSeconds}
                  \n
                  ${daytime}
                  
                  `;
  }

  //Else show timer
  else if(timeHasBeenSet) 
  {

    timesval--;

    if (timesval < 0) {
      timesval = 59;
      timemval--;
    }

    //On Alarm Time

    if (timesval < 1 && timemval < 1 && timehval < 1) {
      var audio = new Audio("alarm.mp3");
      audio.play();
      timeHasBeenSet = false;
      timeDateHasBeenSet = false;
      showingCurrentTime = true;

      //Add Confetti Script
      ad_script = document.body.appendChild(document.createElement("script"));
      ad_script.src = "confetti.js";
      var script = document.getElementById("script");
      document.getElementById("doctitle").textContent = "This is a clock";
      document.getElementById("timeh").value = "";
      document.getElementById("timem").value = "";
      document.getElementById("times").value = "";
      document.getElementById("dates").value = "";
    }
    var dotsHours = "";
    var dotsMin = "";

    if (timehval > 0) {
      dotsHours = "h :";
    }

    if (timemval > 0) {
      dotsMin = "m :";
    }

    if (timehval === 0) {
      timehval = "";
    }

    if (timemval === 0) {
      timemval = "";
    }
    document.getElementById("textresult").innerHTML = `
                  ${timehval}
                  ${dotsHours}
                  ${timemval}
                  ${dotsMin}
                  ${timesval}
                  s
                  `;
  }

  if(timeDateHasBeenSet) 
  {

    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    var dotsHours = "";
    var dotsMin = "";

    if (hours > 0) {
      dotsHours = "h :";
    }

    if (minutes > 0) {
      dotsMin = "m :";
    }


    if (hours === 0 || hours === "00") {
      hours = "";
    }

    if (minutes === 0|| minutes === "00") {
      minutes = "";
    }

     //On Alarm Time

     if (seconds < 1 && minutes < 1 && hours < 1) {
      var audio = new Audio("alarm.mp3");
      audio.play();
      timeHasBeenSet = false;
      timeDateHasBeenSet = false;
      showingCurrentTime = true;

      //Add Confetti Script
      ad_script = document.body.appendChild(document.createElement("script"));
      ad_script.src = "confetti.js";
      var script = document.getElementById("script");

      document.getElementById("timeh").value = "";
      document.getElementById("timem").value = "";
      document.getElementById("times").value = "";
      document.getElementById("dates").value = null;
    }

    document.getElementById("textresult").innerHTML = `
    ${hours}
    ${dotsHours}
    ${minutes}
    ${dotsMin}
    ${seconds}
    s
    `;

  }
}, 1000);

//Set Timer Function

function setTimer() {

  
  timehval = document.getElementById("timeh").value;
  timemval = document.getElementById("timem").value;
  timesval = document.getElementById("times").value;
  
  
    document.getElementById("doctitle").textContent = "Countdown timer";

   
      final_timehval = timehval;
    
  
      final_timemval = timemval;
    
  
      final_timesval = timesval;
    
  
      document.getElementById("textresult").innerHTML = `
      ${final_timehval}
      :
      ${final_timemval}
      :
      ${final_timesval}
      `;
      timeHasBeenSet = true;
      timeDateHasBeenSet = false;
      showingCurrentTime = false;
    
  
}
  
//Set Date Timer

function setDateTimer() {

  

  
  timedval = document.getElementById("dates").value;
  
  


    document.getElementById("doctitle").textContent = "Date timer";
    thisTime = new Date();
    inputTime = new Date(timedval);

    let targetDate = new Date(inputTime - thisTime);

    seconds = Math.floor((targetDate / 1000) % 60)
      .toString()
      .padStart(2, "0");
    minutes = Math.floor((targetDate / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    hours = Math.floor((targetDate / 1000 / 60 / 60) % 24)
      .toString()
      .padStart(2, "0");

    document.getElementById("textresult").innerHTML = `
    ${hours}
    :
    ${minutes}
    :
    ${seconds}
    `;

    timeHasBeenSet = false;
      timeDateHasBeenSet = true;
      showingCurrentTime = false;


    
  
}

