function validate(){
    firstname=document.forms["form1"]["firstname"].value;
    lastname=document.forms["form1"]["lastname"].value;
    email=document.forms["form1"]["email"].value;
    phone=document.forms["form1"]["phone"].value;
    address=document.forms["form1"]["address"].value;
    username=document.forms["form1"]["Username"].value;
    password=document.forms["form1"]["password"].value;
    check=document.getElementById("supportCheckbox").checked
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regex = /[,#-\/\s\!\@\$.....]/gi;
    if(firstname==""){
        alert("Please enter your First Name");      
    }
    else if(lastname==""){
        alert("Please enter your Last  Name");
    }
    else if(email.length==0){
        alert("Enter an Email");
    }
    else if(!email.match(mailformat)){
        alert("Invalid mail format");
    }
    else if(phone.length==0){
        alert("Please enter your phone number")
    }
    else if(phone.length != 11){
        alert("Invalid Phone number");
    }
    else if(address.length==0){
        alert("Please Enter your address");
    }
    else if(address.length < 5 || regex.test(address)){
        alert("Invalid address");
    }
    else if(username.length==0){
        alert("Please enter Username");
    }
    else if(password.length==0){
        alert("Please enter your password");
    }
    else if(password.length<4){
        alert("Password must be 4 characters at least");
    }
    else if (!check) {
          alert("Please check the terms and conditions");
}
    else{
        alert("You have Registered Succesfully");
        window.location.href="";
    }
    
    
}