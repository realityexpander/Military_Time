function toMilitary (time) {

  hours = time.split(":")[0];
  mins = time.split(":")[1].slice(0,2);
  
  if(time.includes("pm")) {
    hours += 12;
  }
  
  if ( (hours+"").length === 1)
    hours = "0"+hours;

  return hours + ":" + mins;
}
