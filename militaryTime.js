function toMilitary (time) {

  hours = time.split(":")[0];
  mins = time.split(":")[1].slice(0,2);
  
  if(time.includes("pm")) {
    hours = parseInt(hours) + 12;
    if (hours>23)
      hours = 0;
  }
  
  if ( (hours+"").length === 1)
    hours = "0"+hours;

  return hours + ":" + mins;
}

console.log(toMilitary("12:00pm"))
