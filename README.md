# Prueba Técnica – Backend & Frontend
Este proyecto corresponde a la prueba técnica que incluye un backend en Node.js con Express y un frontend en React 18 con TailwindCSS.

## Arquitectura del proyecto
El proyecto está dividido en dos aplicaciones independientes:
prueba-tecnica-offymarket/
- backend-posts-api/
- frontend-posts/

Cada una cuenta con su propio `package.json` y comandos de ejecución.

# BACKEND Tecnologías utilizadas
- Node.js
- Express
- Axios
- Cors

# Funcionalidad
- Expone el endpoint `GET /posts`
- Consume una API externa de posts
- Agrupa los posts por nombre de usuario
- Devuelve la cantidad de posts por usuario
- Soporta filtro opcional por nombre: GET /posts?name=Luke Waelchi

# Endpoint en Local
GET http://localhost:3000/posts
GET http://localhost:3000/posts?name=Luke Waelchi

# Endpoint en Producción
GET https://prueba-tecnica-offymarket-production.up.railway.app/posts
GET https://prueba-tecnica-offymarket-production.up.railway.app/posts?name=Luke Waelchi

## Instalación y ejecución
- En Consola:
cd backend-posts-api
npm install
npm start

El backend se ejecuta en: http://localhost:3000

-----------------------------------------------------------------------------------

# FRONTEND Tecnologías utilizadas
- React 18
- Vite
- TailwindCSS v4
- Hooks (useState, useEffect)

# Funcionalidad
- Consume el endpoint /posts del backend local
- Muestra la información en una tabla con: Usuario, Cantidad de posts
- Incluye búsqueda dinámica por nombre de usuario
- Diseño responsivo con TailwindCSS

## Instalación y ejecución
- En Consola:
cd frontend-posts
npm install
npm run dev

El frontend en local se ejecuta en: http://localhost:5173
El frontend en producción se ejecuta en: https://prueba-tecnica-offymarket.vercel.app/

Es necesario que el backend esté corriendo para que el frontend muestre datos.

# Notas adicionales
- El backend y frontend están independientes.
- El filtrado por nombres es dinámico en el frontend.
- El backend también soporta filtrado por query params para mayor flexibilidad.
- No se utilizan dependencias globales.