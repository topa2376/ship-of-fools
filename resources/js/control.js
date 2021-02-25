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
  document.getElementById(prodDiv).appendChild(img);
  document.getElementById(prodDiv).appendChild(name);
  document.getElementById(prodDiv).appendChild(price);
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
