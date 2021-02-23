// Get the order_box
var order_box = document.getElementById("myorder_box");

// Get the button that opens the order_box
var btn = document.getElementById("open_box");

// Get the <span> element that closes the order_box
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the order_box
btn.onclick = function() {
  order_box.style.display = "block";
}

// When the user clicks on <span> (x), close the order_box
span.onclick = function() {
  order_box.style.display = "none";
}

// When the user clicks anywhere outside of the order_box, close it
window.onclick = function(event) {
  if (event.target == order_box) {
    order_box.style.display = "none";
  }
}