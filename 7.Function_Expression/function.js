var greeting;
var day;
if(day)
{
greeting = function() {
  alert("Everything looks good!");
};
}
else {
  greeting = function() {
    alert("Not your day!");
};
}
closeTerminal(greeting);
function closeTerminal(message)
{
  message();
}
