# Front-end Developer Singularity Health Prueba

## Leandro Perez

## Descripción

Esta es una prueba para el puesto el front end developer en Singularity Health, se trata principalmente de una Landing Page, con Inicio de Sesión, y pagina 404, la primera pagina al cargar es el login, sin embargo puedes acceder a la landing por la route /home, al iniciar sesión podrás acceder a la landing desde la ruta principal / ademas de agregarse un botón de cerrar sesión en el navbar.

## Instalación y ejecución

1. Clona el repo: git clone `https://github.com/leandroperez19/singularity-health-test`
2. Navega hacia el directorio: cd `singularity-health-test`
3. Instala las dependencias: `npm install`
4. Ejecuta `npm run dev` para correr el proyecto

## Instalación y ejecución (Docker)

Abre docker desktop en tu equipo

## Para desarrollo con live reload.

1. Corre: `npm run docker:build-dev`
2. Corre: `npm run docker:run-dev`

## Para ver el preview de la pagina en "producción"

1. Corre: `npm run docker:build-prod`
2. Corre: `npm run docker:run-prod`

## Dependencias

1. I18Next: Para internacionalización
2. TailwindCss: Para estilos en clases
3. Styled-components: Para estilos mas complejos y manejo de temas
4. React-query: Para request, caching de las mismas y mejor manejo de sus estados
5. Cypress: Para prueba de componentes y e2e
6. React-icons: Iconos
7. Toastify: Alertas con información relevante de manera atractiva visualmente
8. Swiper: Para componentes de carrusel.
9. React-hook-form: Para validación y manejo de campos de texto
10. Zod: Complemento para react-hook-form en la validación de objetos
