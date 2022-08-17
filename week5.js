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

  const array1 = [1, 2, 3, 4, 6, 20];

  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  
  console.log(sumWithInitial);
  // expected output: 10
  let f = Math.round(-2.49);
  document.getElementById("dem").innerHTML = 
"<p><b>Math.E:</b> " + Math.E + "</p>" +
"<p><b>Math.PI:</b> " + Math.PI + "</p>" +
"<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
"<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
"<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
"<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
"<p><b>Math.Rand:</b> " + Math.random()*10 + "</p>" +
"<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
"<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
  
//Task: using Math object with what we've previously learnt.
// PART 1: Ask user for number of people attending the party

/* ideas: button(book a party) - runs code on click.
    may run a way to gain user input for number of attendees*/
//PART 2: Calculate and log how many people will not be at a 
    // full table of 5 (%?) // 5 people per table. 
     /* May take the value received from part1, and use it to figure
     out table sizes*/
// PART 3: Calculate and log the total cost of the party
/* may also take value from part 1 and figure out the cost per head */

     function numberOfPeople(){
        const peop = document.getElementById("textInput").value;
        document.getElementById("people").innerHTML = 
        "<p><b>number of people:</b> " + peop + "</p>";
        document.getElementById("round").innerHTML = 
        "<p><b>people will not be at a full table of 5:</b> " + peop%5 + "</p>";
        document.getElementById("cost").innerHTML = 
        "<p><b>cost for 12 pounds per person:</b> " + peop*12 + "</p>";
      }

      // document.documentElement.style.setProperty('--animate-duration', '5s');

      // Task:
      // Outer Div class of container
      // Middle Div class of row
      // 3 Inner Div's class of col 
      
      // then apply different column sizes to each e.g. col-5