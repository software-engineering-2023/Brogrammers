/*-------Transfer Money Internal-------*/
document.getElementById("transbtn1").onclick=function(){
 
  
  if (validateForm()) {
    alert("Transfer Money successfully!");
  }

  
  function validateForm() {
    var name = document.getElementById("internalName").value;
    var amount = document.getElementById("internalAmount").value;
    var pay = document.getElementById("internalPay").value;

  
    if (name.trim()=== "") {
      alert("Please enter Recipient name.");
      return false;
    }
  
    if (amount.trim() === "") {
      alert("Please enter amount.");
      return false;
    }
    if (pay.trim() === "") {
      alert("Please select an item in the list.");
      return false;
    }
  

  
    return true;
  }
}

/*-------Transfer Money Domestic-------*/

document.getElementById("transbtn2").onclick=function(){
 
  
  if (validateForm()) {
    alert("Transfer Money successfully!");
  }

  
  function validateForm() {
    var name = document.getElementById("domesticName").value;
    var bankName = document.getElementById("domesticBankname").value;
    var amount = document.getElementById("domesticAmount").value;
    var pay = document.getElementById("domesticPay").value;

  
    if (name.trim()=== "") {
      alert("Please enter Recipient name.");
      return false;
    }
    if (bankName.trim() === "") {
      alert("Please enter Bank Name.");
      return false;
    }
  
    if (amount.trim() === "") {
      alert("Please enter amount.");
      return false;
    }
    if (pay.trim() === "") {
      alert("Please select an item in the list.");
      return false;
    }
  
    return true;
  }
}

/*-------Transfer Money International-------*/
document.getElementById("transbtn3").onclick=function(){
 
  
  if (validateForm()) {
    alert("Transfer Money successfully!");
  }

  
  function validateForm() {
    var name = document.getElementById("internationalName").value;
    var bankName = document.getElementById("internationalBankname").value;
    var amount = document.getElementById("internationalAmount").value;
    var Country = document.getElementById("internationalCountry").value;
    var Currency = document.getElementById("internationalCurrency").value;
    var pay = document.getElementById("internationalPay").value;

  
    if (name.trim()=== "") {
      alert("Please enter  Recipient name.");
      return false;
    }
    if (bankName.trim() === "") {
      alert("Please enter Bank Name.");
      return false;
    }
  
    if (amount.trim() === "") {
      alert("Please enter amount.");
      return false;
    }
    if (Country.trim() === "") {
      alert("Please enter Country.");
      return false;
    }
  
    if (Currency.trim() === "") {
      alert("Please enter Currency.");
      return false;
    }
    if (pay.trim() === "") {
      alert("Please select an item in the list.");
      return false;
    }
  
    return true;
  }
}