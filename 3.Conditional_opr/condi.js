var i = 1;
while ( i <= 10)
{
noteven:if( i % 2 == 0)
  {
    if( i % 4 == 0)
    {
      console.log( i + " is even number and multiple of 4" );
      break noteven;
     }
    console.log( i + " is even number " );
   }
  else
  {
   console.log( i + " is odd number " );
  }
 i++;
}
