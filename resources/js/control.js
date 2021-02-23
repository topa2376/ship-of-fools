//Switch language
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


function update_language(){
  keys = lanDict['keys'];
  for (idx in keys) {
      key = keys[idx];
      $("#" + key).text(get_string(key));
  };
}

function update_view(){
  //change the dict elements 
  //update all the product elements
}

function intialize_view() {
  //this will have to change
  var dst = "groupDrinkBox";

  // place all the products 
  for (i = 0; i < 12; i++){
    var prod = get_product(i);
    drink_box(dst, prod);
  }
  update_language();
}

function drink_box(destination, prod) {
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
  document.getElementById(destination).appendChild(div);
  document.getElementById(prodDiv).appendChild(img);
  document.getElementById(prodDiv).appendChild(name);
  document.getElementById(prodDiv).appendChild(price);
}

// We don't update the view the first time until the document is ready
// loading.
//
$(document).ready(function() {
  intialize_view();
})
