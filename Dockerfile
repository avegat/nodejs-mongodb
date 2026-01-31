# Imagen base oficial de Node LTS
FROM node:18-alpine

ENV MONGOCONN_URL =${MONGOCONN_URL}


# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --only=production

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que escucha la app (3000)
EXPOSE 3000

# Comando por defecto para arrancar la app
CMD ["npm", "start"]
