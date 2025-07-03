# ⚛️ Mini SPA React – Consumo de API Pública con Zustand, Bootstrap y Ruteo 🌐

Este proyecto es una **Aplicación Web de Página Única (SPA)** desarrollada con **React 18 y Vite**, que permite visualizar información de una API pública (Rick and Morty API). Incluye navegación entre rutas, estado global con Zustand, diseño moderno con Bootstrap 5, y formulario validado con notificaciones.

---

## 🧭 Navegación de la App

- `/` → Página de Inicio con bienvenida y vista previa de personajes.
- `/list` → Página de listado completo con búsqueda y filtrado.
- `/contact` → Página de contacto con formulario validado.

---

## 🔍 Vista Previa

🔗 **Deploy en Vercel**  
[mini-spa-react.vercel.app](https://mini-spa-react-git-main-yairaraujo-9154s-projects.vercel.app)

📦 **Repositorio GitHub**  
[github.com/yairSAdfsa/mini-spa-react](https://github.com/yairSAdfsa/mini-spa-react)

---

## 🛠️ Tecnologías y Librerías Usadas

| Herramienta         | Uso Principal                         |
|---------------------|----------------------------------------|
| React 18 + Vite     | Librería principal + bundler rápido    |
| Zustand             | Manejo de estado global                |
| React Router DOM    | Navegación SPA con rutas dinámicas     |
| Axios               | Cliente HTTP para consumir la API      |
| Bootstrap 5         | Diseño responsive y estilos rápidos    |
| React Toastify      | Notificaciones amigables               |

---

## 🧠 Funcionalidades Principales

- 🌐 Consumo real de la **Rick and Morty API**
- 🧾 Visualización de personajes con tarjetas
- 🔍 Filtro por nombre en la vista de lista
- ✅ Validación de formulario de contacto
- 🔔 Notificación de éxito al enviar mensaje
- 📱 Diseño responsive y navegación SPA

---

## 📁 Estructura del Proyecto

```bash
src/
├── components/
│   ├── Card.jsx           # Tarjeta individual con datos de personaje
│   └── CardList.jsx       # Grilla de tarjetas
├── layout/
│   ├── Header.jsx         # Navegación principal con links activos
│   ├── Footer.jsx         # Pie de página
│   └── Layout.jsx         # Estructura general con <Outlet />
├── pages/
│   ├── Home.jsx           # Página de inicio (Hero + preview)
│   ├── ItemList.jsx       # Página con lista completa y búsqueda
│   └── Contact.jsx        # Página con formulario validado
├── store/
│   └── useItemStore.js    # Estado global con Zustand
├── App.jsx                # Rutas principales
└── main.jsx               # Bootstrap, ReactDOM, inicio
🧪 Cómo Instalar y Probar Localmente
Clona el repositorio

bash
Copiar
Editar
git clone https://github.com/yairSAdfsa/mini-spa-react.git
cd mini-spa-react
Instala las dependencias

bash
Copiar
Editar
npm install --legacy-peer-deps
Ejecuta en modo desarrollo

bash
Copiar
Editar
npm run dev
Abre en el navegador

arduino
Copiar
Editar
http://localhost:5173/

📤 Despliegue en Vercel
Este proyecto fue desplegado con éxito usando Vercel.

🛠️ Para resolver conflictos con dependencias, se configuró:

ini
Copiar
Editar
NPM_FLAGS = --legacy-peer-deps
✅ Requisitos Técnicos Cumplidos
 Uso de React con Functional Components y Hooks

 Zustand para estado global

 Ruteo con React Router (/, /list, /contact)

 Diseño responsivo con Bootstrap 5

 Código modular, limpio y profesional

 Formulario validado con toast de éxito

 Fetch real con Axios

 Deploy en producción y documentación lista

🧑‍💻 Autor
Yair Smith Araujo Gabriel
Estudiante de Diseño y Desarrollo de Software – Tecsup
GitHub: @yairSAdfsa

📄 Licencia
Este proyecto está bajo la Licencia MIT. Libre para usar, modificar y compartir.

📸 (Opcional) Capturas de pantalla
Puedes subir imágenes como:

/public/home.png

/public/list.png

/public/contact.png

Y mostrarlas así:

markdown
Copiar
Editar
![Inicio](public/home.png)
![Listado](public/list.png)
![Contacto](public/contact.png)