# MiniShop 🛒

MiniShop es una aplicación de carrito de compras moderna y reactiva construida con **React**, **TypeScript** y **Tailwind CSS**. Este proyecto demuestra un flujo de compra simple con gestión de estado global, validación de stock y una interfaz de usuario limpia y atractiva.

## 🚀 Características

- **Catálogo de Productos**: Vista dinámica de productos disponibles con información de stock.
- **Gestión del Carrito**:
  - Agregar productos al carrito (valida disponibilidad de stock).
  - Visualizar resumen de compra en tiempo real.
  - Aumentar/Disminuir cantidades o eliminar items.
- **Cálculos Automáticos**: Total del pedido y cantidad de items actualizados al instante.
- **Gestión de Estado**: Uso de `Context API` para manejar el estado global del carrito.
- **Diseño Responsivo**: Interfaz adaptada a dispositivos móviles y de escritorio gracias a Tailwind CSS.
- **Feedback Visual**: Botones deshabilitados cuando no hay stock, indicadores de cantidad en el icono del carrito, etc.

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca para construir interfaces de usuario.
- **TypeScript** - Tipado estático para un código más robusto y mantenible.
- **Tailwind CSS** - Framework de utilidades CSS para un diseño rápido y flexible.
- **Vite** - Entorno de desarrollo ultrarrápido.

## 📦 Instalación y Uso

Sigue estos pasos para correr el proyecto localmente:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/sebastian-nc/mini-shop.git
   cd mini-shop
   ```

2. **Instalar dependencias**:
   Usando npm:
   ```bash
   npm install
   ```
   O usando pnpm (recomendado):
   ```bash
   pnpm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**:
   Visita `http://localhost:5173` para ver la aplicación.

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes de UI (Catalogo, CarritoDetalle, Navbar, etc.)
├── context/             # Contexto de React (CarritoContext)
├── hooks/               # Custom Hooks (useCarrito)
├── types/               # Definiciones de tipos TypeScript
├── App.tsx              # Componente principal
└── main.tsx             # Punto de entrada
```

## 📝 Licencia

Este proyecto es para fines educativos y personales.

---
Hecho con ❤️ por [Sebastian](https://github.com/sebastian-nc)
