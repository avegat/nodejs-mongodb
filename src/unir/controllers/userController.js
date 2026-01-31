const UserService = require("../services/UserService");

const userService = new UserService();

const getUser = async (req, res) => {
        const record=  await userService.getUser({ username: req.params.username });
        res.status(200).send(record)
}

const addUser = async (req, res) => {
        const record= await userService.addUser( req.body )
        
        let messages= new Array();
        messages.push("username already exists.")
        if(record){
                res.status(409).send({"error":messages})
        }
        res.status(201).send()
}

module.exports = { getUser, addUser };