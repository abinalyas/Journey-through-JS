var customersListA = ["A","B","C","D"];
var number = customersListA.length;
for( var i=0;i<number;i++)
{
  if(customersListA[i]=="A")
  {
    customersListA[i]=undefined;
  }
  else if (i=number-1) {
    customersListA.push("E");
  }
  console.log(customersListA);
}
