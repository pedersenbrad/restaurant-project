function validate() {
  var name = document.forms["userInputs"]["name"].value;
  var email = document.forms["userInputs"]["email"].value;
  var phone = document.forms["userInputs"]["phone"].value;

  if (name == "") {
      alert("Please fill out the name field.");
      return false;
  }

 if (email == "") {
     alert("Please add email.");
     return false;
 }

 if (phone == "" || isNaN(phone)) {
     alert("Please add phone number. Numbers Only");
     return false;
 }

 alert("Request sent successfully.");
 return false;
}
