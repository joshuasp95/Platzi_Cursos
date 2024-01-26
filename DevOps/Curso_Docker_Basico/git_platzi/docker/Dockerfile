# Utiliza una imagen base de Node.js versión 14.
FROM node:14

# Copia los archivos de definición de dependencias al directorio de trabajo.
COPY ["package.json", "package-lock.json", "/usr/src/"]

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /usr/src

# Instala las dependencias definidas en package.json y package-lock.json.
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo en el contenedor.
COPY [".", "/usr/src/"]

# Informa a Docker que el contenedor escuchará en el puerto 3000 en tiempo de ejecución.
EXPOSE 3000

# Define el comando que se ejecutará cuando el contenedor inicie.
CMD ["node", "index.js"]
