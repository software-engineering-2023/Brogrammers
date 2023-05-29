

var form = document.querySelector('#loginForm'); 
form.addEventListener('submit', handleSubmit);



function handleSubmit(event) {
  event.preventDefault();

  var usernameInput = document.getElementById('formGroupExampleInput');
  var passwordInput = document.getElementById('formGroupExampleInput2');

  if (usernameInput.value === 'admin')
    window.location.href = '';
  else if (usernameInput.value === 'user')
    window.location.href = 'ClientHomePage.html';
  else if (usernameInput.value === 'banker')
    window.location.href = '';
  else
    alert('Invalid username or password');
}

/*document.getElementById("loginForm").add("submit", function(event) {
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

  */