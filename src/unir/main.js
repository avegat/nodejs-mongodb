require('dotenv').config();
const customEnv = require('custom-env');
customEnv.env(true);
const app = require('./app');
const database = require('./db/mongodb');




const PORT = 3000;

var url="mongodb://"+process.env.MONGODB_USER+":"+process.env.PASSWORD+"@"+process.env.MONGODB_HOST+"/"+process.env.MONGODB_DATABASE+"?authSource=admin"
process.env.MONGOCONN
//mongodb://admin:pass@host/database?authSource=admin
console.log(url)
database.connectToDB(url).then(() => {
  server=app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);});

})

