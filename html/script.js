function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please enter your Health Card Number");
      return false;
    }
  }