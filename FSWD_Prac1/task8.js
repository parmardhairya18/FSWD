function dhairya()
{

    let x = prompt("Enter Number : " , "103");

    try
    {
        if(x < 0)
        {
            throw "Number is Negative";
        }
    }

    catch(err)
    {
        console.log("Entered " + err);
    }
}

dhairya();
