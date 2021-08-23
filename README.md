# Prueba Test-Frontend

## Descripción del proyecto
El proyecto es una prueba para frontend en el se podrá visualizar lo siguente:
- **Visualizar el diseño del sistema apegado al documento de prueba.**
- **Se utilizan componentes para mostrar en las diferentes vistas.**
- **Navegar por medio del breadcrumb en las diferentes vistas:**
-- En `/home` se mostrará un botón que te redirigirá a la vista --*Buscar créditos grupales*
--En `/GroupCredits` se mostrará una tabla de información que al seleccionar el nombre del archivo y la descarga se abrirá una imagen. Al darle click sobre inspeccionar te llevara la vista --*Inspeccionar*
--En `/GroupCredits/Inspected` se mostrará una tabla de información y un input para buscar en la tabla. Al presionar la accion `>` te enviará a la vista de --*Control de cambios*
--En `/GroupCredits/Inspect/ChangeControl` se mostrará una tabla de información al presiónar el nombre del archivo se abrirá una imagen.
--En el menú que se encuentra en el Navbar podemos ver Usuarios, donde se utiliza el server `json-server` para crear usuarios y eliminarlos.
- **Se consume el siguiente servicio (https://reqres.in/) para** `Login` **y** `Logout`.
--Para ingresar al sistema es necesario ingresar con el `correo: eve.holt@reqres.in` y `contraseña: cityslicka`
- **Se realizan tests unitarios con `jest`**


## Requisitos
- [node.js] - version >= 10.4.1
- [json-server](https://www.npmjs.com/package/json-server)

## Instalacion
Instalacion de paquetes
```
$ cd test-frontend
$ npm install
```
Correr el json server 
```
$ json-server --watch db.json
```
Correr el proyecto 
```
$ npm run serve
```
Correr las pruebas
```
$ npm run test:unit
```
