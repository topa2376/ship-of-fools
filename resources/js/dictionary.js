var language = 'en';

//here is are all the links for the other pages
dirDict = {             
    'home': ''
}

//dictionary for the text and lanaguges
lanDict = {
    'keys' : ['login','total'],
    'en' : {
        'login': 'Login',
        'total': 'Total'
    },
    'se' : {
        'login': 'Logga In',
        'total': 'Totalbelopp'
    }
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
