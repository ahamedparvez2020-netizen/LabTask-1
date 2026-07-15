console.log("JavaScript Connected");

let attempts = 0;
let lockTime = 0;

function loginValidation()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("message");

   
    if(Date.now() < lockTime)
    {
        msg.innerHTML = "You are locked. Try again after 5 minutes.";
        return false;
    }

    
    if(username == "" || password == "")
    {
        msg.innerHTML = "Username and Password cannot be empty.";
        return false;
    }

   
    if(username == "AIUB" && password == "$_student")
    {
        msg.innerHTML = "Successfully Logged In";
        attempts = 0;
        return false;
    }

    
    attempts++;

    if(attempts == 1)
    {
        msg.innerHTML = "You have 3 attempts left.";
    }
    else if(attempts == 2)
    {
        msg.innerHTML = "You have 2 attempts left.";
    }
    else if(attempts == 3)
    {
        msg.innerHTML = "You have 1 attempt left. You are locked for 5 minutes.";
        lockTime = Date.now() + (5 * 60 * 1000);
        attempts = 0;
    }

    return false;
}