/* 
    Requirement:
        Should ask for user to enter a name
        Should return the entered name 
        If the name is empty, should return 'unknown'

    Task: 
        Figure out why this function breaks

*/ 

function getName(){
    var name;
        name = prompt("Enter name:");
    
        if (name.length < 1){               //if nothing is enetered then set default name
            name = "unknown";
        }
    
        return name;
    } 
    console.log("My name is", getName());       //display the name entered or defualt one if not