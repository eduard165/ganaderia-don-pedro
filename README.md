# Ganadería Don Pedro — Next.js

Sitio por páginas en Next.js App Router con React y TypeScript. El inicio presenta la ganadería y enlaza a las páginas independientes. La información de contacto y las preguntas frecuentes viven en un footer compartido por todo el sitio.

## Iniciar en tu computadora

Requiere Node.js 20.9 o superior. Desde una terminal en esta carpeta:

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Guarda los archivos para ver tus cambios. Detén el servidor con Ctrl+C.

Para verificar o generar una versión de producción:

```bash
npm run typecheck
npm run build
npm start
```

No necesitas ejecutar build para trabajar con dev.

## Dónde editar

- `src/app/page.tsx`: página de inicio.
- `src/app/historia/page.tsx`: página de historia.
- `src/app/genetica/page.tsx`: página de genética y razas.
- `src/app/ejemplares/page.tsx`: catálogo; acepta el filtro inicial en `?raza=Gyr` o `?raza=Sardo%20Negro`.
- `src/app/layout.tsx`: título, descripción y estructura global.
- `src/app/globals.css`: estilos y adaptación a celular.
- `src/components/header.tsx`: navegación entre páginas y menú móvil.
- `src/components/footer.tsx`: pie común con contacto general, WhatsApp y preguntas frecuentes desplegables.
- `src/components/catalog.tsx`: catálogo, filtros y detalle en modal.
- `src/components/breed-link.tsx`: enlaces a la página de ejemplares filtrada por raza.
- `src/lib/catalog.ts`: tipos y registros de ejemplo; punto de sustitución por la fuente real de datos.
- `src/app/api/ejemplares/route.ts`: ruta GET de servidor con catálogo de ejemplo.
- `public/assets/`: imágenes ilustrativas.

## Base para crecimiento

La página de ejemplares obtiene los ejemplares del módulo de datos en el servidor y pasa esos datos al componente interactivo. La ruta `GET /api/ejemplares` devuelve los mismos datos en JSON; no hay una llamada de red innecesaria para cargar el catálogo inicial.

Se puede sustituir el módulo de datos por una consulta a una base de datos o a Sheets, y agregar rutas de servidor y un panel de administración después de definir el alcance.

Esta entrega todavía no incluye base de datos, inicio de sesión, permisos, escritura de registros, panel administrativo o conexión con Google Sheets/Drive. La API es de lectura y usa datos de ejemplo. Editar el catálogo requiere modificar `src/lib/catalog.ts`.

Los secretos de una futura integración deben configurarse en variables de entorno del servidor. No deben agregarse al código cliente ni usar el prefijo NEXT_PUBLIC_ si son secretos.

## Contenido provisional

Las fotografías son imágenes generadas e ilustrativas, no ejemplares reales disponibles. El logo proporcionado está en `public/assets/logo-don-pedro.jpeg`. Los datos, precios y disponibilidad deben validarse antes de publicar.

`public/assets/catalog.webp` reúne cuatro fotos en cuadrícula; los estilos muestran una por cada tarjeta. Para fotografías reales es preferible reemplazarlo por imágenes individuales y actualizar el tipo de dato y la tarjeta.

El sitio usa Google Fonts con fuentes alternativas del sistema. Los enlaces de contacto utilizan los datos del formulario y deben revisarse antes de la publicación final.

## Publicación

Esta entrega es un proyecto local descargable. El enlace de la muestra anterior sigue utilizando la versión HTML. Los cambios locales no actualizan ese enlace automáticamente. No configures `output: 'export'` si vas a utilizar funciones dinámicas del servidor o un panel con escritura de datos.

## Formulario de contacto

El correo del footer se copia al pulsarlo. WhatsApp muestra el icono y el número, y abre el chat sin añadir un mensaje.

El formulario incluye nombre, correo, asunto predefinido, raza y mensaje. Para “Otra consulta”, el mensaje es obligatorio. El servidor valida los campos, envía a la ganadería y establece el correo del visitante como Reply-To. Si hay un error, conserva lo que escribió el visitante.

Para activar el envío:

1. Copia `.env.example` como `.env.local`.
2. Completa SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD y CONTACT_FROM_EMAIL con los datos de tu proveedor de correo. El remitente debe estar autorizado por ese proveedor. CONTACT_TO_EMAIL es el correo receptor; actualmente udvtz@hotmail.com.
3. Reinicia `npm run dev`. Al publicar, configura estas mismas variables en el servidor.

El puerto 465 usa TLS directo; otros puertos, normalmente 587, requieren STARTTLS. Las credenciales permanecen en el servidor. No compartas `.env.local` ni lo subas a Git. Sin configuración, el formulario informa que el envío no está disponible y no muestra una confirmación falsa.

Archivos para modificar: `src/components/contact-form.tsx`, `src/components/contact-links.tsx`, `src/lib/contact.ts` (asuntos y validación) y `src/app/api/contacto/route.ts` (envío). El envío real debe probarse con las credenciales de tu proveedor. Antes de abrirlo al público conviene añadir protección contra spam adecuada al hosting.
