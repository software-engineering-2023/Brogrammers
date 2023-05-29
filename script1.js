document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropDown;
  if (isDropDownButton) {
    currentDropDown = e.target.closest("[data-dropdown]");

    currentDropDown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropDown) return;
    dropdown.classList.remove("active");
  });
});
function validate() {
  firstname = document.forms["form1"]["firstname"].value;
  lastname = document.forms["form1"]["lastname"].value;
  email = document.forms["form1"]["email"].value;
  phone = document.forms["form1"]["phone"].value;
  address = document.getElementById("address").value;
  username = document.forms["form1"]["Username"].value;
  password = document.forms["form1"]["password"].value;
  check = document.getElementById("supportCheckbox").checked;
  SSN = document.getElementById("SSN").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regex = /[,#-\/\s\!\@\$.....]/gi;
  if (firstname == "") {
    alert("Please enter your First Name");
  } else if (lastname == "") {
    alert("Please enter your Last  Name");
  } else if (email.length == 0) {
    alert("Enter an Email");
  } else if (!email.match(mailformat)) {
    alert("Invalid mail format");
  } else if (phone.length == 0) {
    alert("Please enter your phone number");
  } else if (phone.length != 11) {
    alert("Invalid Phone number");
  } else if (SSN.length == 0) {
    alert("Please enter your SSN");
  } else if (SSN.length != 14) {
    alert("Your SSN should be 14 Number");
  } else if (address.length == 0) {
    alert("Please Enter your address");
  } else if (address.length < 5) {
    alert("Invalid address");
  } else if (username.length == 0) {
    alert("Please enter Username");
  } else if (password.length == 0) {
    alert("Please enter your password");
  } else if (password.length < 4) {
    alert("Password must be 4 characters at least");
  } else if (!check) {
    alert("Please check the terms and conditions");
  } else {
    alert("You have Registered Succesfully");
    window.location.href = "Login.html";
  }
}
function Calculate() {
  const y = document.getElementById("LoanType");
  const value = y.value;
  const LoanType = y.options[y.selectedIndex].text;
  const x = document.getElementById("Duration");
  const value1 = x.value;
  const Duration = x.options[x.selectedIndex].text;
  const AssociatedPhone = document.getElementById("number").value;
  const Amount = document.getElementById("Amount").value;
  const number = document.getElementById("number").value;
  if (value == "") {
    alert("Please choose LoanType");
  } else if (value1 == "") {
    alert("Please choose the Duration you Prefer");
  } else if (Amount < 1000) {
    alert("Please Write Amount greater 1000");
  } else if (number.length == 0) {
    alert("Please Enter Phone Number");
  } else if (number.length != 11) {
    alert("Invalid Phone Number");
  } else if (value == "Personal") {
    if (Duration == "1 Year") {
      document.getElementById("Intrest Rate").innerText = "15%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.15) / 12;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "2 Year") {
      document.getElementById("Intrest Rate").innerText = "18%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.18) / 24;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "3 Year") {
      document.getElementById("Intrest Rate").innerText = "21%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.21) / 36;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "4 Year") {
      document.getElementById("Intrest Rate").innerText = "24%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.24) / 48;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "5 Year") {
      document.getElementById("Intrest Rate").innerText = "27%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.27) / 60;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
  } else {
    if (Duration == "1 Year") {
      document.getElementById("Intrest Rate").innerText = "9%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.9) / 12;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "2 Year") {
      document.getElementById("Intrest Rate").innerText = "12%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.12) / 24;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "3 Year") {
      document.getElementById("Intrest Rate").innerText = "15%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.15) / 36;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "4 Year") {
      document.getElementById("Intrest Rate").innerText = "18%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.18) / 48;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
    if (Duration == "5 Year") {
      document.getElementById("Intrest Rate").innerText = "21%";
      document.getElementById("Installment Amount").innerText =
        (Amount * 1.21) / 60;
      document.getElementById("Intrest Rate").style.visibility = "Visible";
      document.getElementById("Installment Amount").style.visibility =
        "Visible";
    }
  }
}
function CheckApply() {
  const y = document.getElementById("LoanType");
  const value = y.value;
  const LoanType = y.options[y.selectedIndex].text;
  const x = document.getElementById("Duration");
  const value1 = x.value;
  const Duration = x.options[x.selectedIndex].text;
  const AssociatedPhone = document.getElementById("number").value;
  const Amount = document.getElementById("Amount").value;
  const number = document.getElementById("number").value;
  if (value == "") {
    alert("Please Choose Loan Type");
  } else if (number.length == 0) {
    alert("Please enter Phone Number");
  } else if (number.length != 11) {
    alert("Invalid Phone Number");
  } else if (Amount.length == 0) {
    alert("Please Enter the Amount you Want");
  } else if (Amount < 1000) {
    alert("The Amount entered is low");
  } else if (value1 == "") {
    alert("please Choose Duration");
  } else {
    alert("Loan Request have been Recorded ," + "Kindly wait for our Response");
    window.location.href = "Loans.html";
  }
}
function Report() {
  const myTextarea = document.getElementById("w3review").value;
  if (myTextarea == "" || myTextarea.length < 4) {
    alert("Specify your Issue in Details ,So we can Help You");
  } else {
    alert("We have Recorded your Issue");
    window.location.href = "ClientHomePage.html";
  }
}
function CheckOpen() {
  const y = document.getElementById("AccType");
  const value = y.value;
  const AccType = y.options[y.selectedIndex].text;
  const x = document.getElementById("Currency");
  const value1 = x.value;
  const Currency = x.options[x.selectedIndex].text;
  const AssociatedPhone = document.getElementById("AccNumber").value;
  const file = document.getElementById("file").value;
  if (value == "") {
    alert("Please Choose Account Type");
  } else if (AssociatedPhone.length == 0) {
    alert("Please enter Phone Number");
  } else if (AssociatedPhone.length != 11) {
    alert("Invalid Phone Number");
  } else if (value1 == "") {
    alert("please Choose Currency");
  } else if (file == "") {
    alert("Please Upload Guarntees");
  } else {
    alert(
      "Opening Account Request have been Recorded ," +
        "Kindly wait for our Response"
    );
    window.location.href = "ClientHomePage.html";
  }
}
