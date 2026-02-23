ACERCA DE:
(POC) Aplicación Backend NodeJS con conexión a BD Mongo.

Requisitos

Tener instalado Node JS versión 18 o superior
https://nodejs.org/en/download

Validar instalación
$ node --version
v18.20.1


Instalación.

1.- Ejecutar npm install para desgargar las dependencias
npm install

2.- Crear archivo de varaibles de ambiente en /
touch .env

3.- Agregar la variables de entorno
MONGODB_HOST= mongo-service
MONGODB_DATABASE= unir
MONGODB_USER= admin
PASSWORD= 


4.- Iniciar la aplicación
npm start

5.-Ejecutar los endpoint.

a) Consulta usuario  Method GET

curl --location 'http://localhost:3000/user/unir1'

b) Registrar usuario

curl --location 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data '{
    "username":"unir1",
        "name":"arturo"
}'
