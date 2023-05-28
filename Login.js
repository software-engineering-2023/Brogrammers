
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  if (validateForm()) {
    window.location.href = "ClientHomePage.html";
  }
});
  
  function validateForm() {
    var username = document.getElementById("formGroupExampleInput").value;
    var password = document.getElementById("formGroupExampleInput2").value;
    var role = document.getElementById("validationDefault04").value;
  
    if (username.trim()=== "") {
      alert("Please enter your username.");
      return false;
    }
  
    if (password.trim() === "") {
      alert("Please enter your password.");
      return false;
    }
  
    if (role === "") {
      alert("Please select a role.");
      return false;
    }
  
    return true;
  }
  



document.getElementById("Register").onclick = function(){
    window.location.assign ( "register.html");
};
