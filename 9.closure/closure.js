function bookTicket(vechicle)
{
  return function(person)
  {
      alert( vechicle + " ticket for " + person + " is confirmed." );
  }
}

var busBookTicket = bookTicket("Bus");
var trainBookTicket = bookTicket("Train");
var shipBookTicket = bookTicket("Ship");

busBookTicket("Eddie");
