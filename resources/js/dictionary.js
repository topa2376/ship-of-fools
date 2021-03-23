var language = 'en';

//here is are all the links for the other pages
dirDict = {             
    'home': ''
}

//dictionary for the text and lanaguges
lanDict = {
    'keys' : ['login','total', 'name', 'productionyear', 'producer', 'countryoforiginlandname', 'category', 'alcoholstrength', 'packaging', 'priceinclvat', 'productionyear', 'organic', 'addToCartButton', 'cartHeading', 'payByCard', 'payByCash', 'orderHeading', 'thanksForOrder', 'deliveryNotice', 'newOrderBtn', 'editBtn', 'cancelOrderBtn', 'orderNumber', 'vip-login', 'loginUserName', 'loginPassword', 'loginCancel', 'loginForgotPwd', 'loginbutton', 'vipProfile', 'orderHistory', 'edit', 'view', 'logout', 'availableOptions', 'menu', 'number', 'productName', 'stock', 'price', 'orderHistoryEdit_btn', 'ordersTxt', 'inventory', 'members', 'management'],
        'en' : {
        'login': 'Login',
        'total': 'Total',
        'name': 'Name: ',
        'producer': 'Producer: ',
        'productionyear': 'Production Year :',
        'countryoforiginlandname': 'Country of Origin: ', 
        'catgegory': 'Catgegory: ', 
        'alcoholstrength': 'Alcohol Strength: ', 
        'packaging': 'Packaging: ', 
        'priceinclvat': 'Price (including VAT):', 
        'productionyear': 'Production Year: ',
        'organic': 'Organic: ',
        'addToCartButton': 'Add to cart',
        'cartHeading': 'Current Order',
        'payByCard': 'Pay with card',
        'payByCash': 'Pay to waiter',
        'orderHeading': 'Order Confirmed',
        'thanksForOrder': 'Thanks for your order!',
        'deliveryNotice': 'We will deliver your drinks soon',
        'newOrderBtn': 'New order',
        'editBtn': 'Edit order',
        'cancelOrderBtn': 'Cancel order',
        'orderNumber': 'Order number: #',
        'vip-login': 'VIP Login',
        'loginUserName': 'Username',
        'loginPassword': 'Password',
        'loginCancel': 'Cancel',
        'loginForgotPwd': 'Forgot password?',
        'loginbutton': 'Login',
        'orderHistory': 'Order History',
        'edit': 'Edit',
        'view': 'View',
        'vipProfile': 'VIP Profile',
        'logout': 'Logout',
        'availableOptions': 'Available Options',
        'menu': 'Menu',
        'number': 'Number',
        'productName': 'Product name',
        'stock': 'Stock',
        'price': 'Price',
        'orderHistoryEdit_btn': 'Edit List',
        'ordersTxt': 'Orders',
        'inventory': 'Inventory',
        'members': 'Members',
        'management': 'Management',
    },

    //THIS HAS TO BE TRANSLATED!!!!!!
    'se' : {
        'login': 'Logga In',
        'total': 'Totalbelopp',
        'name': 'Namn: ',
        'producer': 'Producent: ',
        'productionyear': 'Produktionsår:',
        'countryoforiginlandname': 'Från: ',
        'category': 'Kategori: ',
        'alcoholstrength': 'Alkoholhalt: ',
        'packaging': 'Paketering: ',
        'priceinclvat': 'Pris (inklusive moms):',
        'productionyear': 'Produktionsår: ',
        'organic': 'Ekologisk: ',
		'addToCartButton': 'Lägg till',
        'cartHeading': 'Aktuell Beställning',
        'payByCard': 'Betala med kort',
        'payByCash': 'Betala till servitris',
        'orderHeading': 'Beställning bekräftad',
        'thanksForOrder': 'Tack för din order!',
        'deliveryNotice': 'Vi kommer med dina drycker strax',
        'newOrderBtn': 'Ny order',
        'editBtn': 'Ändra order',
        'cancelOrderBtn': 'Avbryt order',
        'orderNumber': 'Ordernummer: #',
        'vip-login': 'VIP Login',
        'loginUserName': 'Användarnamn',
        'loginPassword': 'Lösenord',
        'loginCancel': 'Avbryt',
        'loginForgotPwd': 'Glömt lösenordet?',
        'loginbutton': 'Logga in',
        'orderHistory': 'Order Historik',
        'edit': 'Ändra',
        'view': 'Visa',
        'vipProfile': 'VIP Profil',
        'logout': 'Logga ut',
        'availableOptions': 'Tillgängliga Alternativ',
        'menu': 'Meny',
        'number': 'Nummer',
        'productName': 'Produkt namn',
        'stock': 'Antal',
        'price': 'Pris',
        'orderHistoryEdit_btn': 'Ändra Lista',
        'ordersTxt': 'Ordrar',
        'inventory': 'Lager',
        'members': 'Medlemar',
        'management': 'Förvaltning',
    }
}


menu = {

}

var topCategory = ['All', 'Vitt vin', 'Cognac', 'Okryddad sprit', 'Kryddad sprit', 'Whisky, Malt'];

var cnst = {
    'max_list_item' : 12,
    'start_val' : 0,
    'start_res' : 0
}


function get_string(key) {
    return lanDict[language][key];
}

//What is this?
function get_product(key){
    return engBev[key];
}