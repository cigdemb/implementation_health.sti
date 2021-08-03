function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "" || x == " ") {
    alert("Please enter your Health Card Number");
    return false;
  }
}

function validateFormName() {
  var x = document.forms["myFormName"]["fname"].value;
  var y = document.forms["myFormName"]["lname"].value;
  var z = document.forms["myFormName"]["postCode"].value;
  if (x == "" || x == " ") {
    alert("Please enter your first name");
    return false;
  }
  else if (y == "" || y == " ") {
    alert("Please enter your last name");
    return false;
  }
  else if (z == "" || z == " ") {
    alert("Please enter your Postcode");
    return false;
  }

}


