# JobPulse

Modern Angular application for job tracking and discovery.

- Frontend: Angular 17 + TypeScript + RxJS
- Build: Angular CLI
- Node 18+ required

## Quick start

- Prerequisites:
  - Node.js 18+ and npm
  - Git

- Setup
  - Clone: `https://github.com/pranavisback/JobPulse.git`
  - Install: `cd frontend && npm install`
  - Open Another Terminal : `cd backend && npm install`
  - Dev server: `npm start` (or `npx ng serve -o`)
  - Build: `npm run build`

- Default dev URL: http://localhost:4200

## Scripts (package.json)

- `npm start` – start dev server with live reload
- `npm run build` – production build to `dist/`
- `npm run build:dev` – development build (if defined)
- `npm test` – unit tests (if configured)
- `npm run lint` – lint (if configured)

Note: If a script is missing, use the Angular CLI directly: `npx ng <command>`.

## Build and deploy

- Production build: `npm run build`
- Output path: `frontend/dist/`
- Static hosting options: GitHub Pages, Netlify, Vercel, Firebase Hosting, Nginx

Tip: Set correct base href if deploying under a subpath:
- `npx ng build --base-href /your-subpath/`

## Project layout

- `frontend/` – Angular app root
  - `src/`
    - `index.html` – app shell
    - `main.ts` – bootstrap
    - `app/` – components, services, routes, etc.
  - `angular.json` – Angular workspace config
  - `tsconfig*.json` – TypeScript configs
  - `package.json` – dependencies and scripts

## Tech stack

- Angular 17
- TypeScript
- RxJS
- Zone.js (browser integration)

## Troubleshooting

- Node version: ensure v18+ (`node -v`)
- Clean install: delete `node_modules` and run `npm install`
- Port in use: `npx ng serve --port 4300`
- 404 favicon: an inline SVG favicon is used to avoid network requests

## Contributing

- Fork and create a feature branch
- Keep PRs small and focused
- Add tests where applicable
- Follow Angular style guide

## Security

- Report vulnerabilities via private issue or security advisory
- Do not open public issues for sensitive reports

## License

MIT. See [LICENSE](./LICENSE).
