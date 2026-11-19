# Rey del Lápiz

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

> Landing profesional para un caricaturista en vivo, orientada a generar reservas por WhatsApp.

**Sitio en vivo:** [www.elreydellapiz.cl](https://www.elreydellapiz.cl)

## Sobre el proyecto

Landing page de un caricaturista en vivo para eventos. Su objetivo es presentar el servicio y llevar al visitante a reservar por WhatsApp. Es un sitio estático, sin backend, construido sobre una plantilla propia de **MM Digital Solutions** pensada para reutilizarse con otros clientes.

## Calidad y arquitectura

- **TypeScript estricto** y verificación de tipos en el build (`tsc -b && vite build`).
- **ESLint** (configuración flat) y **Prettier** para mantener el código consistente.
- Código organizado por responsabilidad: componentes, configuración, datos, hooks, estilos y tipos separados.
- Contenido y configuración del sitio fuera de los componentes, para adaptar la plantilla a un cliente nuevo sin tocar la lógica.
- Decisiones registradas en un historial estilo ADR.

## Stack

| Capa | Tecnología |
| --- | --- |
| Interfaz | React, TypeScript |
| Estilos | Tailwind CSS v4, class-variance-authority |
| Iconos | lucide-react |
| Build | Vite |
| Calidad | ESLint, Prettier |
| Hosting | Vercel |

## Estructura del proyecto

```text
src/
├── components/   componentes de interfaz
├── config/       configuración del sitio
├── data/         contenido
├── hooks/        hooks reutilizables
├── styles/       estilos globales
└── types/        tipos de TypeScript
public/
├── images/       imágenes
└── videos/       videos
docs/             arquitectura y decisiones
```

## Cómo ejecutarlo

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev            # servidor de desarrollo
npm run build          # verificación de tipos + build de producción
npm run preview        # vista previa del build
npm run typecheck      # solo verificación de tipos
npm run lint           # revisa el código con ESLint
npm run lint:fix       # corrige lo que ESLint pueda arreglar
npm run format         # formatea con Prettier
npm run format:check   # verifica el formato sin modificar archivos
```

## Despliegue

Se despliega en **Vercel**.

## Documentación del proyecto

| Documento | Contenido |
| --- | --- |
| [`CLAUDE.md`](CLAUDE.md) | Contexto permanente y estándar de calidad para asistentes de IA |
| [`AGENTS.md`](AGENTS.md) | Reglas y comandos para agentes de IA |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Cómo está organizado el proyecto y por qué |
| [`docs/decisions.md`](docs/decisions.md) | Bitácora de decisiones técnicas |
| [`AUDIT.md`](AUDIT.md) | Estado técnico actual |
| [`ROADMAP.md`](ROADMAP.md) | Plan de implementación por fases |

## Autor

**Mario Meléndez** — Estudiante de Ingeniería en Informática (Duoc UC) · Desarrollo web para pymes con **MM Digital Solutions**.
[Perfil de GitHub](https://github.com/Mario-Melendez-Inostroza)
