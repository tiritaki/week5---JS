// TASK - BUILD THE FOLLOWING INSIDE A FUNCTION:
  // if (time>=20 seconds) and the user has not subscribed (boolean) && (&& = and operator)
  // setTimeOut (20000) //20 seconds
  // else the user has already subscribed
  // clearTimeOut

  const myTimeout = setTimeout(myGreeting, 20000);

  function myGreeting() {
    document.getElementById("demo").innerHTML = "User Subscribed!"
  }
  
  function myStopFunction() {
    clearTimeout(myTimeout);
  }

  //Create a new day 
  const d = new Date(1604, 6, 11)
  document.getElementById("date").innerHTML = d.getDate();
  document.getElementById("month").innerHTML = d.getMonth();
  document.getElementById("year").innerHTML = d.getFullYear();
  document.getElementById("fulldate").innerHTML = d.toDateString();


