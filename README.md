# Practica Integradora

Proyecto hecho con la finalidad de integrar todo lo aprendido hasta el momento del curso. 

## Instrucciones de Uso

1. Clone el repositorio.
2. Instale las dependencias con `npm install`.
3. Configure la base de datos en el archivo `config.js`.
4. Ejecute la aplicación con `npm start`.

## Funcionalidades User

GET  - http://localhost:8080/users
POST - http://localhost:8080/users
{
  "nombre": "Nombre de Usuario",
  "email": "correo@example.com",
  "id": "05"
}
GET - http://localhost:8080/users/64f6365d139f0295df6c8871
PUT - http://localhost:8080/users/64f6365d139f0295df6c8871
{
  "nombre": "Nuevo Nombre",
  "email": "nuevoemail@example.com"
}
DELETE - http://localhost:8080/users/64f6365d139f0295df6c8871


## Funcionalidades Products

GET -   http://localhost:8080/products
GET -   http://localhost:8080/products/64f63696139f0295df6c8873
POST -  http://localhost:8080/products
{
  "nombre": "Nombre del Producto",
  "categoria": "Categoría del Producto",
  "precio": 01.99,
  "stock": 10,
  "imagen": "URL_de_la_imagen"
}
PUT -   http://localhost:8080/products/64f63696139f0295df6c8873
{
  "nombre": "Nuevo Nombre del Producto",
  "categoria": "Nueva Categoría",
  "precio": 0.99
}
DELETE - http://localhost:8080/products/64f63696139f0295df6c8873

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- Otros

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir a este proyecto, por favor crea un fork y presenta tus cambios a través de un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
