var total = 0; //for stroing the total 

// for storing all the orders
selectedItems = []

//for stroing and structuring the details of the drinks we wish t order 
var item = {
    "id": "",
    "name": "",
    "price": "",
    "quantity":""
}

//functions that modify the values above.
//=============================================================
function set_item(a,b,c,d){
    //function to the the values 
    item.id = a;
    item.name = b;
    item.price = c;
    item.quantity = d;
}

// might be smart to have these math functions in a seperate file.
function multiply(a,b){
    //function to mutluiply 
    var c = parseInt(a) * parseInt(b);
    return c;
}

function add(a,b){
    //function to add 
    var c = parseInt(a) + parseInt(b);
    return c;
}
