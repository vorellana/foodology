# Foodology - Localización de Restaurantes

### Desarrollo de una API REST con operaciones de localización de Restaurantes
### Desarrollado principalmente con **Node.js, Express**, desplegado/publicado en **Heroku** y con configuración para despliegue en **Docker**.

**Nota:** Actualmente la aplicación se encuentra desplegada en la plataforma Heroku por lo cual ya se puede utilizar la API a través de su endpoint inmediatamente.

## 1. Operación de localización de Restaurantes
### Lo valores devueltos son los siguientes
*  **processedList:** Lista de los Restaurantes de Foodology indicando si están visibles o no y muestra la posición promedio de cada uno.
*  **restaurantsFound:** Lista de todos los Restaurantes encontrados con respecto a los 4 puntos definidos (a partir de estos se calcula la posición promedio de cada Restaurante).
*  **points:** Lista de los 4 puntos que se utilizarón para determinar si a partir de estos podemos ver la cocina oculta.
```sh
# URL
https://foodology-vo.herokuapp.com/api-foodology/location
```
  ![alt text](https://github.com/vorellana/foodology/blob/main/resources/GET-1.png?raw=true)

## 2. Instalación y uso (Despliegue y pruebas unitarias)
**Es un requisito tener instalado docker y docker-compose.** Si no los tiene puede revisar los siguientes enlaces para la instalación.
https://docs.docker.com/get-docker/
https://docs.docker.com/compose/install/
```sh
# descargamos el proyecto
git clone https://github.com/vorellana/foodology.git

# entramos a la carpeta del proyecto
cd foodology

# iniciamos el despliegue de los servicios de backend y database
docker-compose up -d 
```
Una vez finalizado el proceso de despliegue ya podemos utilizar la aplicación.
Ahora el API se encuentra funcionando en el puerto 3000 y ya podemos acceder a la operación mediante la siguiente url:
```sh
# url
http://localhost:3000/api-foodology/location
```
### Ejecutar pruebas unitarias

Verificamos que estamos en la carpeta raíz del proyecto: "foodology"
```sh
# Ejecutamos el **test** para la pruebas unitarias con **jest**
npm run test
```
  ![alt text](https://github.com/vorellana/foodology/blob/main/resources/TEST-1.png?raw=true)

## 3. Tecnologías de desarrollo
Para el presente proyecto se utilizarón las siguientes tecnologías como librerías, frameworks, servicios en la nube, herramientas de despliegue entre otros.

### Backend
*  **Node.js:** Entorno en tiempo de ejecución para desarrollar el Backend en Javascript.
* **Express:** Framework e infraestructura web rápida, minimalista y flexible para Node.js. 
* **ESLint:** Herramienta para el análisis de código estático (corrige y sugiere buenas prácticas).
* **Nodemon:** Aplicación para reiniciar el servidor automáticamente después de cada cambio.
* **Morgan:** Middleware para ver las peticiones HTTP a través de la terminal.
### Deployment
*  **Heroku**: Servicio en la nube para desplegar aplicaciones.
*  **Docker:** Tecnología de contenedores que posibilita la creación y el uso de contenedores.
*  **Docker Compose:** Herramienta que permite simplificar el uso de Docker y gestionar varios contenedores.
*  **GitHub**: Servicio de repositorio de código fuente en donde se encuentran almacenado todo el código del proyecto.
## 4. Características
* La estructura principal del proyecto se maneja en 3 capas: routes, controllers y services.
* La aplicación tiene implementada la operacione requerida en el documento de la prueba.
* El código del proyecto ha sido analizado a través de ESLint (correción y buenas prácticas de código) y no arrojo ningún error ni adevertencia.
* Se implementaron las pruebas unitarias con la librería jest.
* Al ejecutar las pruebas unitarias no arrojaron errorres.
* Se configuró la orquestación del despliegue de Docker con dockerfile y docker-compose.

## Gracias
