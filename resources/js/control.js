//============================== Switch language ===============================
function switchLanguage () {
  if (language=='en'){// English
     document.getElementById("languageId").src="./resources/img/swedish.png";  
     language='se';
     update_language();
  }else{
    document.getElementById("languageId").src="./resources/img/english.png";
    language='en';
    update_language();
  }// Swedish
}

function update_language(){
  keys = lanDict['keys'];
  for (idx in keys) {
      key = keys[idx];
      $("#" + key).text(get_string(key));
  };
}
//==============================

var userID = 0
function getInfo() {
    var username = document.getElementById("uname").value
    var password = document.getElementById("psw").value
    var typeofuser = 1
    var login = 1
//console.log("Your username is" + username + " and password is" + password)
    for(i = 0; i < DB.users.length; i++){
     var typeofuser = DB.users[i].type_of_user
        if(username == DB.users[i].username && password == DB.users[i].password && typeofuser == "VIP") { login = 2, && userID = DB.users[i].user_id  }
        else if(username == DB.users[i].username && password == DB.users[i].password && typeofuser == "Bartender") { login = 3, && userID = DB.users[i].user_id }
        console.log(userID) //needs to be fixed
      }
 //for(i = 0; i < DB.users.length; i++){
   //    var typeofuser = 1
     // else if(username == DB.users[i].username && password == DB.users[i].password && typeofuser == "bartender") { login = 3 }
 //}
   // return console.log("Your username and/or password is wrong" + Username +" " + Password)
   // for(i = 0; i < DB.users.length; i++)
   // if(username != DB.users[i].username && password != DB.users[i].password) {  window.location.href = "https://datahahah.ytmnd.com"}
 //else {  window.location.href = "https://datahahah.ytmnd.com"}

    //window.location.href = "vipProfile.html"
//var userID == DB.users[i].user_id;
    //var userID == getElementById(user_id)//DB.users[i].user_id.value  var userID == DB.users[i].user_id;

    if (login == 2 ) {window.location.href = "vipProfile.html"}
    else if (login == 3 ) {window.location.href = "bartenderMain.html"}
    else if { window.location.href = "https://datahahah.ytmnd.com"}

    }


function userDetails(userName) {
    var userCollect = [];
    var userID;
    var userIndex;
    var account;

    // First we find the user ID of the selected user. We also save the index number for the record in the JSON
    // structure.
    //
    for (i = 0; i < DB.users.length; i++) {
        if (DB.users[i].username == userName) {
            userID = DB.users[i].user_id;
            userIndex = i;
        };
    };

    // We get the current account status from another table in the database, account. We store this in
    // a variable here for convenience.
    //
    for (i = 0; i < DB.account.length; i++) {
        if (DB.account[i].user_id == userID) {
            account = DB.account[i].creditSEK;
        }
    };

    // This is the way to add the details you want from the db into your own data structure.
    // If you want to change the details, then just add or remove items accordingly below.
    userCollect.push(
        DB.users[userIndex].user_id,
        DB.users[userIndex].username,
        DB.users[userIndex].first_name,
        DB.users[userIndex].last_name,
        DB.users[userIndex].email,

        account
    );

    return userCollect;
}




//============================== Purchase Items ===============================
function add_purchase(){
  //get content from page 
  //perform operation 
  //update model 
  //update view
}

function sub_purchase(){
  //get content from page 
  //perform operation 
  //update model 
  //update view
}

function change_quantity(){
  //get content from page 
  //perform operation 
  //update model 
  //update view
}

function update_total(result){
}


//============================== Sort and Select Catagories ========================
function set_categories (){
  var children = document.getElementById("filterBox").children;
  for (i = 0; i < children.length; i++){
    children[i].id = topCategory[i];
  }
}

function list_selected(category){
  var category = category.id;
  remove_prod(); //clear list
  var list = selectedCategory(category);
  var iter = list.length;
  if (iter > cnst['max_list_item']){ iter = cnst['max_list_item']};
  for (i = 0; i < iter; i++){
    drink_box(list[i]);
  }
}

function remove_prod(){
  var myNode = document.getElementById("groupDrinkBox");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  //removes the prod boxes.
}

//============================== Create item box ========================
function drink_box(prod) {
  var dst = "groupDrinkBox";
  var div = document.createElement('div');
  var prodDiv = prod.articleid;
  div.className = 'singleDrinkBox';
  div.id = prodDiv;
  var img = document.createElement('img');
  var name = document.createElement('p');
  var price = document.createElement('p');
  img.src = prod.img;
  name.textContent = prod.name + " (" + prod.alcoholstrength + ")"; 
  price.textContent = "SEK " + prod.priceinclvat;
  document.getElementById(dst).appendChild(div);
  div.onclick = function() {
  add_to_cart(prod)
  //play sound
  var audio = new Audio('./resources/addToCart.mp3');
  audio.play();
  //play sound end
  };
  document.getElementById(prodDiv).appendChild(img);
  document.getElementById(prodDiv).appendChild(name);
  document.getElementById(prodDiv).appendChild(price);
}

//=============================== Create cart item ===========================

function add_element_to_cart(prod){
  var div = document.createElement('div'); // added element 
  div.className = "basketElement";
  div.id = "Basket Item" + prod.nr;
  var name = document.createElement('itemTitle');
  var price = document.createElement('itemPrice');
  var quantity = document.createElement('input');
  var deleteButton = document.createElement('button');
  var divider = document.createElement('hr');
  deleteButton.onclick = function() {remove_cart_items(div.id)};
  name.textContent = prod.name;
  price.textContent = prod.priceinclvat;
  quantity.defaultValue = 1;
  deleteButton.textContent = "Remove";
  div.appendChild(name);
  div.appendChild(price);
  div.appendChild(deleteButton);
  div.appendChild(quantity);
  div.appendChild(divider);
  return div;
}

function add_to_cart (prod){
  var newElement = add_element_to_cart(prod);
  document.getElementById('cartItems').appendChild(newElement);
}

function remove_cart_items(id){
  var myNode = document.getElementById('cartItems');
  for (i = 0; i < myNode.childNodes.length; i++) {
    if (myNode.childNodes[i].id == id){
      myNode.removeChild(myNode.childNodes[i]);
    }
  }
}

//============================== Update and set View ========================
function update_view(){
  //change the dict elements 
  //update all the product elements
}

function intialize_view() {
  // place all the products 
  for (i = 0; i < 12; i++){
    var prod = get_product(i);
    drink_box(prod);
  }
  set_categories ();
  update_language();
}

// We don't update the view the first time until the document is ready
// loading.
$(document).ready(function() {
  intialize_view();
})
