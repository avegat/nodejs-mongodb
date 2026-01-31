const onlyLetters = /^[a-zA-Z]+$/;
const onlyLettersNumbers = /^[a-zA-Z0-9]+$/;

const onlyLetterValidation=(data)=>{
    var coincidence=onlyLetters.test(data);
    return coincidence;
}


const onlyLetterNumberValidation=(data)=>{
    var coincidence=onlyLettersNumbers.test(data);
    return coincidence;
}

module.exports = { onlyLetterValidation , onlyLetterNumberValidation};