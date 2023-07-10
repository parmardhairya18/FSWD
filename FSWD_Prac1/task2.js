let input = prompt("Enter A for Sum , B for Difference , C for Product and D for Qoutient : " , "A");

let x = 40;

let y = 20;

function operation(x,y){
    
    if(input == "A")
    {
        return x + y;
    }
    
    else if(input == "B")
    {
        return x - y;
    }
    
    else if(input == "C")
    {
        return x * y;
    }
    
    else if(input == "D")
    {
        return x / y;
    }
    
    else{
        console.log("Wrong Input");
    }
    
}

let ans = operation(x,y);

console.log(ans);
