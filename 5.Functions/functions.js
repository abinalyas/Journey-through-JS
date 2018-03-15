var message=prompt("Enter the string");
var searchElement=prompt("Enter the searching element");
var count=0;
counter(message,searchElement);
function counter(messsage,searchElement)
{
  for(var i=0;i<message.length;i++)
  {
    if (typeof(message)!="string")
    {
    alert("Not a valid string");
    return false;
   }
    if (message.charAt(i)==searchElement)
    count++;
  }
  if(count==0)
  {
    alert("no element found");
    return 0;
  }
  alert( count + " found in input string");
  return count;
}
