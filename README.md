# ProdSecOps premium React Router website

This repository is ready for browser-only GitHub deployment.

## Migration
1. Create a backup branch from the current static site.
2. On a migration branch, delete old root `main.js` and `style.css`.
3. Replace root `index.html` and `.github/workflows/static.yml`.
4. Upload all folders and files in this package, preserving paths.
5. Merge the migration branch into `main`.
6. In Settings > Pages choose GitHub Actions.

GitHub Actions performs `npm install`, `npm run build`, and deploys `dist`. React Router is declared in `package.json`; no local installation is required.
