# Trans Capital S.A.S — Landing

Landing corporativa de **Trans Capital S.A.S**, transporte terrestre automotor especial en Bogotá y Sabana Norte. Sitio estático hecho con Astro y Tailwind CSS, publicado en Cloudflare Pages.

> Estado: **Fase 1 — base del proyecto.** La página actual es provisional; las secciones llegan en las fases 2–4.

## Requisitos

- **Node.js ≥ 22.23.4** (lo exige Astro 7). El repo fija la versión en `.node-version` (26 LTS). Con `fnm` o `nvm`, entra a la carpeta y ejecuta `fnm use` / `nvm use`.
- **pnpm 10** (`npm i -g pnpm@10` o `corepack enable`).

## Comandos

| Comando             | Qué hace                                       |
| ------------------- | ---------------------------------------------- |
| `pnpm install`      | Instala dependencias                           |
| `pnpm dev`          | Servidor local en `http://localhost:4321`      |
| `pnpm build`        | Genera el sitio estático en `dist/`            |
| `pnpm preview`      | Sirve `dist/` para revisarlo antes de publicar |
| `pnpm check`        | Revisión de tipos y plantillas (`astro check`) |
| `pnpm lint`         | ESLint, falla con cualquier advertencia        |
| `pnpm format`       | Formatea todo con Prettier                     |
| `pnpm format:check` | Verifica el formato sin modificar archivos     |

## Estructura

```text
design/              Diseño aprobado (solo referencia, no se publica)
  referencia-diseno.dc.html
  logos/             SVG originales del logo e isotipo
  capturas/          Capturas del diseño (opcional)
public/              Archivos servidos tal cual (favicon, robots, _headers…)
src/
  assets/            Logos e imágenes procesadas por astro:assets
  components/        Componentes Astro (secciones y piezas reutilizables)
  content/           Datos editables (flota, FAQ, clientes…) — fase 3
  icons/             Íconos SVG propios para astro-icon (si hacen falta)
  layouts/           Plantillas de página
  pages/             Rutas del sitio
  styles/global.css  Tokens de diseño (@theme) y estilos base
```

## Sistema de diseño

Los tokens del diseño están en [`src/styles/global.css`](src/styles/global.css) dentro de `@theme`. Tailwind los convierte en utilidades, así que **no se usan valores sueltos** en los componentes:

- **Colores:** `bg-action`, `text-brand`, `bg-deep`, `bg-tint`, `bg-panel`, `text-muted`, `border-line`…
- **Espaciado:** `px-page` (borde de página), `px-inset` (margen interno), `pt-section` (entre secciones), `py-panel`, `gap-heading`, `p-card`, `gap-gutter`.
- **Ancho máximo:** `max-w-page` (1376 px).
- **Radios:** `rounded-panel`, `rounded-card`, `rounded-pill`…
- **Tipografía:** `font-display` (Manrope) y `font-sans` (Inter), con tamaños `text-display-hero`, `text-display-section`, etc.
- **Breakpoint del nav:** `nav:` (960 px).

Íconos: [Lucide](https://lucide.dev) vía `astro-icon` → `<Icon name="lucide:message-circle" />`.
Fuentes: Manrope e Inter alojadas en el sitio con Fontsource (sin CDN de Google).

## Stack

Astro 7 (salida estática) · TypeScript estricto · Tailwind CSS 4 · astro-icon + Lucide · Fontsource · ESLint · Prettier · Cloudflare Pages · GitHub Actions.
