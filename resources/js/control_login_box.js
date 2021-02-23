// Get the order_box
var login_box = document.getElementById("mylogin_box");

// Get the button that opens the order_box
var btn = document.getElementById("open_login_box");

// Get the <span> element that closes the order_box
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the order_box
btn.onclick = function() {
  login_box.style.display = "block";
}

// When the user clicks on <span> (x), close the order_box
span.onclick = function() {
  login_box.style.display = "none";
}

// When the user clicks anywhere outside of the order_box, close it
window.onclick = function(event) {
  if (event.target == order_box) {
    login_box.style.display = "none";
  }
}