require('dotenv').config();
const customEnv = require('custom-env');
customEnv.env(true);
const app = require('./app');
const database = require('./db/mongodb');




const PORT = 3000;
console.log(process.env.MONGOCONN)
database.connectToDB(process.env.MONGOCONN).then(() => {
  server=app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);});

})

