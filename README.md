# 🍎 Contador de Calorías

Una aplicación web moderna para rastrear el consumo y quema de calorías, construida con React, TypeScript y Tailwind CSS.

## ✨ Características

- **Rastreo de Calorías**: Registra calorías consumidas y quemadas
- **Categorización**: Organiza actividades por comida y ejercicio
- **Resumen Visual**: Muestra un resumen claro de calorías consumidas, quemadas y la diferencia
- **Persistencia de Datos**: Los datos se guardan automáticamente en el localStorage
- **Interfaz Responsiva**: Diseño adaptativo para dispositivos móviles y desktop
- **Reinicio de Aplicación**: Función para limpiar todos los datos registrados

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Heroicons** - Iconos SVG de alta calidad
- **UUID** - Generación de identificadores únicos

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd CalorieTracker-context
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de React
│   ├── ActivityList.tsx # Lista de actividades
│   ├── CalorieDisplay.tsx # Display de calorías
│   ├── CalorieTracker.tsx # Componente principal del tracker
│   └── Form.tsx        # Formulario de entrada
├── context/            # Contexto de React
│   └── ActivityContext.tsx
├── data/              # Datos estáticos
│   └── categories.ts
├── hooks/             # Hooks personalizados
│   └── useActivity.ts
├── reducers/          # Reducers para gestión de estado
│   └── activity-reducer.ts
├── types/             # Definiciones de tipos TypeScript
│   └── index.ts
└── App.tsx           # Componente principal
```

## 🎯 Funcionalidades Principales

### 1. Registro de Actividades
- Agregar comidas con su contenido calórico
- Registrar ejercicios y calorías quemadas
- Categorización automática (Comida/Ejercicio)

### 2. Resumen de Calorías
- **Calorías Consumidas**: Total de calorías ingeridas
- **Calorías Quemadas**: Total de calorías gastadas en ejercicio
- **Diferencia**: Balance neto de calorías

### 3. Gestión de Datos
- Persistencia automática en localStorage
- Función de reinicio para limpiar todos los datos
- Lista de actividades con opción de eliminación

## 🎨 Diseño y UX

- **Colores**: Esquema de colores verde (lime) para representar salud y bienestar
- **Responsive**: Diseño adaptativo que funciona en móviles y desktop
- **Accesibilidad**: Contraste adecuado y navegación por teclado
- **Feedback Visual**: Estados hover y disabled para mejor UX

## 🔧 Configuración de Desarrollo

### TypeScript
El proyecto está configurado con TypeScript para un desarrollo más seguro y mantenible.

### ESLint
Configurado con reglas para React y TypeScript para mantener la calidad del código.

### Tailwind CSS
Configurado con PostCSS para optimización automática de estilos.

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones modernas)
- **Dispositivos**: Móviles, tablets y desktop
- **Sistemas Operativos**: Windows, macOS, Linux

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ usando React y TypeScript.

---

**¡Disfruta rastreando tus calorías de manera saludable!** 🏃‍♂️💪

<img width="1920" height="1588" alt="CapturePage(1)" src="https://github.com/user-attachments/assets/c6ded990-f730-4e5b-86e5-ddb74d435818" />

