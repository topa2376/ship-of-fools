var language = 'en';

//here is are all the links for the other pages
dirDict = {             
    'home': ''
}

//dictionary for the text and lanaguges
lanDict = {
    'keys' : ['login','total', 'name', 'productionyear', 'producer', 'countryoforiginlandname', 'category', 'alcoholstrength', 'packaging', 'priceinclvat', 'productionyear', 'organic', 'addToCartButton'],
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
        'addToCartButton': 'Add to cart'
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
		'addToCartButton': 'Lägg till'
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

function get_product(key){
    return engBev[key];
}
