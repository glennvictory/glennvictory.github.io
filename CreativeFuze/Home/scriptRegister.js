function validate(){
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");
    const region = document.getElementById("region");
    const music = document.getElementById("music");
    const erName = document.getElementById("erName");
    const erUsername = document.getElementById("erUsername");
    const erEmail = document.getElementById("erEmail");
    const erPassword = document.getElementById("erPassword");
    const erAddress = document.getElementById("erAddress");
    const erPhone = document.getElementById("erPhone");
    const erRegion = document.getElementById("erRegion");
    const erMusic = document.getElementById("erMusic");

    const alphabet = /^[A-Za-z]+$/;

    if(name.value == ""){
        erName.innerText = "Name must be filled";
        name.style = "border-color: red";
        name.focus();
        return false;
    }
    else if(!name.value.match(alphabet)){
        erName.innerText = "Name must be alphabet only";
        name.style = "border-color: red";
        name.focus();
        return false;
    }
    else if(name.value.length < 5 || name.value.length > 20){
        erName.innerText = "Name must be between 5 - 20";
        name.style = "border-color: red";
        name.focus();
        return false;
    }
    else{
        name.style = "border-color: rgb(1, 180, 1)";
        erName.innerText = "";
    }

    if(username.value == ""){
        erUsername.innerText = "Username must be filled";
        username.style = "border-color: red";
        username.focus();
        return false;
    }
    else if(username.value.length < 5 || username.value.length > 20){
        erUsername.innerText = "Username must be between 5 - 20";
        username.style = "border-color: red";
        username.focus();
        return false;
    }
    else{
        username.style = "border-color: rgb(1, 180, 1)";
        erUsername.innerText = "";
    }

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
        email.style = "border-color: rgb(1, 180, 1)";
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
        password.style = "border-color: red";
        password.focus();
        return false;
    }
    else{
        password.style = "border-color: rgb(1, 180, 1)";
        erPassword.innerText = "";
    }

    if(address.value == ""){
        erAddress.innerText = "Address must be filled";
        address.style = "border-color: red";
        address.focus();
        return false;
    }
    else if(address.value.length < 5){
        erAddress.innerText = "Address must be at least 5 words";
        address.style = "border-color: red";
        address.focus();
        return false;
    }
    else if(!address.value.includes("Street")){
        erAddress.innerText = "Address must contain 'street'";
        address.style = "border-color: red";
        address.focus();
        return false;
    }
    else{
        address.style = "border-color: rgb(1, 180, 1)";
        erAddress.innerText = "";
    }

    if(phone.value == ""){
        erPhone.innerText = "Phone must be filled";
        phone.style = "border-color: red";
        phone.focus();
        return false;
    }
    else{
        phone.style = "border-color: rgb(1, 180, 1)";
        erPhone.innerText = "";
    }

    if(region.value == ""){
        erRegion.innerText = "Region must be selected";
        return false;
    }
    else{
        erRegion.innerText = "";
    }

    if(music.value == ""){
        erMusic.innerText = "Region must be selected";
        return false;
    }
    else{
        erMusic.innerText = "";
    }
}

