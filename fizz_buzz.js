for (let i=1; i<51; i++)
{ if (i !=0)                                    /* as long as the counter is not 0 continue */
    {
        if ((i % 3 == 0) && (i%5 ==0))          /* if the counter is a multple of 3 or a multiple of 5 then print FizzBuzz */
        {
            console.log(i ,'Fizz Buzz');
        }
        else if ( i %5 == 0)                    /* If counter is a multiple of 6 then print 'Buzz' */
        {
            console.log(i,'Buzz');
        }
        else if (i %3 ==0)                      /* If counter is a multiple of 6 then print 'Fizz' */
        {
            console.log(i,'Fizz');
        }                                       /* if not a multiple of 3 or 5 then do nothing */
    }

}