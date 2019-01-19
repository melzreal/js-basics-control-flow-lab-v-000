// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let charge;
    if (feet <= 400) {
      charge = 'This one is on me!';
    } else (feet > 2000) {
    charge = 'I will gladly take your thirty bucks.';
    } else (feet > 2500 ) {

     charge = 'No can do.';
    }
    return charge;
  }
