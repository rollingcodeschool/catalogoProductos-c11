# ☕ Cafetería CRUD

¡Bienvenido al proyecto CRUD de productos para una cafetería!

Este es un proyecto de ejemplo que demuestra la creación, lectura, actualización y eliminación (CRUD) de productos utilizando React.

## 🚀 Tecnologías Utilizadas

* **React:** La biblioteca principal para construir la interfaz de usuario.
* **React-Bootstrap:** Componentes de UI pre-construidos y responsivos para un diseño rápido.
* **SweetAlert2:** Para alertas personalizadas y bonitas.
* **React Hook Form:** Para la gestión de formularios con validaciones.
* **React Router:** Para la navegación y el enrutamiento de las diferentes vistas de la aplicación.

## 📁 Estructura del Proyecto

La estructura principal del proyecto es la siguiente:
```
src/
├── assets/
├── components/
│   ├── pages/
│   │   ├── producto/
│   │   │   ├── CardProducto.jsx
│   │   │   ├── FormularioProducto.jsx
│   │   │   └── itemProducto.jsx
│   │   ├── Administrador.jsx
│   │   ├──   DetalleProducto.jsx
│   │   ├──    Error404.jsx
│   │   ├──   Inicio.jsx
│   │   └──    Login.jsx
│   ├── routes/
│   │   └── ProtectorRutas.jsx
│   └── shared/
│       ├── Footer.jsx
│       └── Menu.jsx
├── data/
├── App.jsx
├── index.css
└── main.jsx
```

## ⚙️ Variables de Entorno

Este proyecto utiliza variables de entorno para almacenar información sensible o de configuración. Para que la aplicación funcione correctamente, debes crear un archivo `.env` en la raíz del proyecto (al mismo nivel que `package.json` y `vite.config.js`) con el siguiente contenido:

```dotenv
VITE_API_EMAIL=mail@mail.com
VITE_API_PASSWORD=123456Aa$
```

## 🛠️ Instalación y Ejecución
1. Clona este repositorio

    ```git clone https://github.com/rollingcodeschool/catalogoProductos-c11```
1. Navega a la carpeta del proyecto:


    ```cd catalogoProductos-c11```
1. Crea el archivo .env con las variables de entorno: 

```dotenv
VITE_API_EMAIL=mail@mail.com
VITE_API_PASSWORD=123456Aa$
```

4. Instala las dependencias:

    ```npm install```
1. Inicia la aplicación:
 
    ```npm run dev```

## 👩‍💻 Autoría

Este proyecto fue desarrollado por Arias Emilse. ¡Gracias por tu interés!

---- 

¡Disfruta desarrollando!💻