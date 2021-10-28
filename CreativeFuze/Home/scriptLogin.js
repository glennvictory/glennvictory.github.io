function validate(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const erEmail = document.getElementById("erEmail");
    const erPassword = document.getElementById("erPassword");
    
    if(email.value == ""){
        erEmail.innerText = "Email must be filled";
        email.style = "border-color: red";
        email.focus();
        return false;
    }
    else if(!email.value.includes("@")){
        erEmail.innerText = "Email must has '@'";
        email.style = "border-color: red";
        email.focus();
        return false;
    }
    else if(!email.value.endsWith(".com")){
        erEmail.innerText = "Email must ends with '.com'";
        email.style = "border-color: red";
        email.focus();
        return false;
    }
    else{
        email.style = "border-color: none";
        erEmail.innerText = "";
    }
    
    if(password.value == ""){
        erPassword.innerText = "Password must be filled";
        password.style = "border-color: red";
        password.focus();
        return false;
    }
    else if(password.value.length < 8 || password.value.length > 30){
        erPassword.innerText = "Password must be between 8 - 30";
        return false;
    }
    else{
        email.style = "border-color: none";
        erPassword.innerText = "";
    }
    }