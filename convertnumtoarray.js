/* function to converts a specified number
(input) to an array of digits   */
var InpNumber;

function PrintArray(inputNumber)
{
    var Numstring=String(inputNumber);              
    for (var i=0; i<Numstring.length; i++)          /* Loop to end of length of string entered*/
    {
        console.log(Number(Numstring[i]));          /* Display each number on a new line*/
    }
}

InpNumber=Number( prompt("Enter the string"));      /* Enter string of numbers*/
PrintArray(InpNumber);                              /* Call function*/