function scuberGreetingForFeet(feet){
  // Write your code here!
  let customerMessage 
  if (feet <= 400) { 
    customerMessage = "This one is on me!";
  }
  else if (feet <= 2000) {
    customerMessage = "That will be twenty bucks.";
  }
  else if (feet <=2500) {
    customerMessage = "I will gladly take your thirty bucks."
  }
  else if (feet >2500) {
    customerMessage = "No can do."
  }
  return customerMessage
}

function ternaryCheckCity(city){
  // Write your code here!
  let goodCity;
  city === "NYC" ? (goodCity = "Ok, sounds good.") : (goodCity = "No go.");
  return goodCity;
}

function switchOnCharmFromTip(tipPercent){
  // Write your code here!
  let partingMessage;
  switch (tipPercent) {
    case "generous":
      partingMessage = "Thank you so much.";
      break;
    case "not as generous":
      partingMessage = "Thank you.";
      break;
    default: 
      partingMessage = "Bye.";
      break;
  }
  return partingMessage;
}