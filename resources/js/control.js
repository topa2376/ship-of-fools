//Switch language
function switchLanguage () {
  if (language==true){// English
     document.getElementById("languageId").src="./resources/images/swedish.png";
     language=!language;
  }else{
    document.getElementById("languageId").src="./resources/images/english.png";
    language=!language;
  }// Swedish
}
