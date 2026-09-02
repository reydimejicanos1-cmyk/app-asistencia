# Instalar "Asistencia" en tu teléfono

## Publicar (5 minutos, gratis)

1. Descomprime este archivo. Te queda la carpeta **app-asistencia**.
2. Entra a **https://app.netlify.com/drop** desde tu computadora.
3. **Abre la carpeta**, selecciona los archivos de adentro (index.html, sw.js, app.webmanifest, icon-192.png, icon-512.png) y arrastra **esa selección** a la página.
   Si arrastras la carpeta completa y te sale "Page not found", agrega **/app-asistencia/** al final de la dirección — también funciona.
4. Netlify te da una dirección tipo `https://algo.netlify.app`. Ábrela y verifica que se vea la app.

## Instalar en el teléfono

1. Abre esa misma dirección en **Chrome en tu Android**.
2. Menú (⋮) → **Instalar aplicación** / **Agregar a pantalla principal**.

Queda el ícono rojo en la pantalla de inicio y abre en pantalla completa.

> Tiene que ser una dirección `https://`. Si abres el archivo directo desde la memoria del teléfono se ve, pero no se instala ni guarda datos.

## Qué funciona

- Padrón: registrar, importar CSV desde un archivo, eliminar y marcar deserción.
- Pasar lista con P / Tarde / Ausente, filtros y toque en los conteos para ver quiénes son.
- Datos de la sesión, resumen, cierre y reporte.
- Exportar a Excel: padrón, resumen y registro de asistencia.
- Funciona sin conexión y guarda todo en el teléfono.

## Qué sigue simulado

- **Cámara**: el visor es un marcador de posición, no toma fotos reales.
- **GPS**: "Usar mi ubicación actual" escribe coordenadas de ejemplo.
- **Compartir**: muestra un aviso, no abre WhatsApp.
- **Sin servidor**: los datos viven solo en ese teléfono, no se sincronizan ni se respaldan.

La especificación para desarrollarlas está en la carpeta `design_handoff_registro_asistencia`.
