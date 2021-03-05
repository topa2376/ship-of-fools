

var DB = new Data();

function Data() {
    this.users = [];
    this.beverages = [];
    this.payments = [];
    this.bought = [];
    this.sold = [];
}

function multiply(a,b){
    var c = parseInt(a) * parseInt(b);
    return c;
}

function add(a,b){
    var c = parseInt(a) + parseInt(b);
    return c;
}
// Execute the loading of the files
//
