#Comando para crear la Imagen
#docker build -t spgct .

#Comando para desplegar el contenedor por el puerto 9000

# Usa la imagen base de Node.js 18.20.4
FROM node:18.20.4

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /appSpgctDock

# Copia los archivos de configuración de tu proyecto al contenedor
COPY package*.json ./
COPY postcss.config.cjs ./
COPY quasar.config.js ./
COPY tsconfig.json ./

RUN npm config set fetch-retries 5
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 120000


# Instala las dependencias del proyecto
RUN npm install --location=global @quasar/cli
RUN npm install
RUN npm install uuid


# Copia el resto de los archivos de tu proyecto al contenedor
COPY . .

# Expone el puerto que usará la aplicación
EXPOSE 9000

# Comando para lanzar el proyecto
CMD ["quasar", "dev"]
# docker run -d -it -p 9000:9000/tcp spgct
