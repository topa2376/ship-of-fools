var language = 'en';

//here is are all the links for the other pages
dirDict = {             
    'home': ''
}

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

var cnst = {
    'start_val' : 0,
    'start_res' : 0,
}


function get_string(key) {
    return lanDict[language][key];
}

function get_product(key){
    return engBev[key];
}

