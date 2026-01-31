const getGretting = (req, res) => {
let message = "Hola desde NodeJS";
        res.status(200).send(message)
}
module.exports = { getGretting };