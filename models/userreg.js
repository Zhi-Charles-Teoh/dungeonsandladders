function userRegForm() {
  var x = document.forms["userRego"]["testinput"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

module.exports = userRegForm();