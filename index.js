// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let message;
    if (someValue <= 400) {
      message = 'This one is on me!';
    } else if ((someValue > 2000) && (someValue < 2500)) {
    message = 'I will gladly take your thirty bucks.';
  } else if(someValue > 2500){
    message = 'No can do.';
  }
   return message;
}

function ternaryCheckCity(city){
  city == 'NYC' ?  'Ok, sounds good.' : 'No go.';
}
