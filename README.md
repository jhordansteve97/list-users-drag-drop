# Lista de Usuarios con Drag & Drop

## Descripcion
Este proyecto es una prueba técnica que consiste en crear una lista de usuarios obtenidos desde una API, almacenarlos en **Redux** y permitir moverlos entre listas mediante drag & drop.

Se utilizó **Redux** para manejar el estado global de la aplicación de manera eficiente, especialmente útil para aplicaciones con estados complejos y grandes. Además, Redux permite la persistencia del estado y facilita la depuración mediante Redux DevTools.

[Demo](https://list-users-drag-drop.vercel.app/)

## Características

- Obtención de usuarios desde una API externa.

- Gestión del estado global con Redux.

- Soporte para drag & drop entre listas.

- Visualización y depuración del estado mediante Redux DevTools.

## Requisitos

- Node.js v25.0.0

- npm 11.6.2

## Instalación y ejecución
1. Renombra el archivo .env.template a .env y configura las variables necesarias.
2. Instala las dependencias del proyecto:
`npm install`
3. Levanta el proyecto en modo desarrollo:
`npm run dev`

>[!NOTE]
> Es necesario agregar **.env** de lo contrario no agregara los usuarios.