const { onlyLetterValidation, onlyLetterNumberValidation } = require('./formatValidation');

const  userNameValidation=(req, res, next) =>{
    let messages=new Array();
    if(req.params.username==undefined || !onlyLetterNumberValidation(req.params.username))
    {
        messages.push("Invalid username");
        return res.status(400).json({error:messages});
    }
    next();
}



const userValidation=(req, res, next) =>{
     const data = req.body;
    let messages=new Array();
    if(data.name==undefined || data.username==undefined) {
        messages.push("- name or username are required");
        return res.status(400).json({error:messages});
    }
    if(!onlyLetterNumberValidation(data.username)){
        messages.push("- username only accept numbers and letters");
    }
    if(!onlyLetterValidation(data.name)){
        messages.push("- name only accept letters");
    }
    if(messages.length>0){
       return res.status(400).json({error:messages});
    }
    next();
}


module.exports = { userValidation, userNameValidation};