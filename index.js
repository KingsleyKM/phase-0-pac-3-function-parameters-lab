function introduction(name ='Aki'){
    return(`Hi, my name is ${name}.`);
}
//introduction("Aki");

function introductionWithLanguage(name =`Aki`,language = `Ember.js`){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
//introductionWithLanguage("Aki","Ember.js");

function introductionWithLanguageOptional(name ='Gracie',language = "JavaScript"){
    return(`Hi,my name is ${name} and I am learning to program in ${language}`)
}
//introductionWithLanguageOptional("Aki")

function introductionWithLanguageOptional(name =`Gracie`,language = "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguageOptional('Pyhton')