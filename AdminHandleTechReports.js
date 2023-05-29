

       
document.addEventListener('DOMContentLoaded', function() {
    
    var acceptButtons = document.getElementsByClassName('acceptBtn');
  
    for (var i = 0; i < acceptButtons.length; i++) {
      acceptButtons[i].addEventListener('click', acceptReport);
    }
  
    function acceptReport(event) {
      var button = event.target;
      var row = button.closest('tr');
      var statusCell = row.querySelector('td[id^="Status"]');
  
      statusCell.textContent = 'Accepted';
      statusCell.style.color = 'green';
  
      button.disabled = true;
    }


  });
  





// Function to remove the row
/*function deleteRow(rowId) {
    var row = document.getElementById(rowId);
    row.parentNode.removeChild(row);
  }
  
  // Add event listeners to accept buttons
  document.getElementById("Accept1").onclick = function() {
    alert("Report is Accepted successfully!");
    deleteRow("row1");
  };
  
  document.getElementById("Accept2").onclick = function() {
    alert("Report is Accepted successfully!");
    deleteRow("row2");
  };
  
  document.getElementById("Accept3").onclick = function() {
    alert("Report is Accepted successfully!");
    deleteRow("row3");
  };
  
  // Repeat the above code for all other accept buttons
  // ...
  
  // Add event listeners to reject buttons
  document.getElementById("Reject1").onclick = function() {
    alert("Report is Rejected!");
  };
  
  document.getElementById("Reject2").onclick = function() {
    alert("Report is Rejected!");
  };
  
  document.getElementById("Reject3").onclick = function() {
    alert("Report is Rejected!");
  };
  
  // Repeat the above code for all other reject buttons
  // ...
  */